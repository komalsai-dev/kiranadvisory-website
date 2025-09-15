import express from 'express';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('dist'));

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'do2yfxwmo',
  api_key: process.env.CLOUDINARY_API_KEY || '813716586858736',
  api_secret: process.env.CLOUDINARY_API_SECRET || 'dRKfbLF-UxrupjA7bbOVtgnPVP8'
});

// Configure multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  }
});

// Cloudinary folder for gallery images
const GALLERY_FOLDER = 'kiran-gallery';

// In-memory storage for metadata (optional - used for performance only)
// Metadata is always fetched from Cloudinary, so this is not critical for functionality
let imageMetadata = new Map();

// Routes
app.get('/api/gallery', async (req, res) => {
  try {
    // Fetch all images from Cloudinary gallery folder
    const result = await cloudinary.search
      .expression(`folder:${GALLERY_FOLDER}`)
      .max_results(100)
      .execute();

    // Transform Cloudinary results to match frontend expectations
    const images = await Promise.all(result.resources.map(async (resource, index) => {
      const imageId = resource.asset_id || resource.public_id;
      
      // Always fetch full resource details from Cloudinary for reliable metadata
      let cloudinaryMetadata = null;
      try {
        const fullResource = await cloudinary.api.resource(resource.public_id);
        cloudinaryMetadata = fullResource;
        console.log(`🔍 Fetched full resource for ${resource.public_id}:`, {
          context: fullResource.context,
          metadata: fullResource.metadata
        });
      } catch (fetchError) {
        console.log(`⚠ Could not fetch full resource for ${resource.public_id}:`, fetchError.message);
      }
      
      // Try multiple sources for title and description (prioritize Cloudinary metadata)
      let title = cloudinaryMetadata?.context?.custom?.title ||
                  cloudinaryMetadata?.context?.title || 
                  cloudinaryMetadata?.context?.alt || 
                  cloudinaryMetadata?.context?.caption ||
                  resource.context?.custom?.title || 
                  resource.context?.title || 
                  resource.context?.alt || 
                  resource.context?.caption ||
                  `Gallery Image ${index + 1}`;
      
      let description = cloudinaryMetadata?.context?.custom?.description ||
                        cloudinaryMetadata?.context?.description || 
                        cloudinaryMetadata?.context?.caption || 
                        resource.context?.custom?.description || 
                        resource.context?.description || 
                        resource.context?.caption || 
                        '';
      
      // Debug logging for metadata
      if (index < 3) { // Log first 3 images for debugging
        console.log(`🔍 Image ${index + 1} metadata:`, {
          public_id: resource.public_id,
          cloudinary_metadata: cloudinaryMetadata?.context,
          search_result_context: resource.context,
          final_title: title,
          final_description: description
        });
      }
      
      return {
        id: imageId,
        title: title,
        description: description,
        url: resource.secure_url,
        publicId: resource.public_id,
        uploadedAt: resource.created_at
      };
    }));

    // Sort images by upload date (newest first)
    images.sort((a, b) => new Date(b.uploadedAt) - new Date(a.uploadedAt));

    console.log(`✅ Fetched ${images.length} images from Cloudinary`);
    res.json(images);
  } catch (error) {
    console.error('❌ Error fetching gallery from Cloudinary:', error);
    res.status(500).json({ error: 'Failed to fetch gallery images' });
  }
});

app.post('/api/gallery/upload', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image file provided' });
    }

    const title = req.body.title || `Gallery Image ${Date.now()}`;
    const description = req.body.description || '';

    console.log(`📤 Uploading image with title: "${title}" and description: "${description}"`);

    // Upload to Cloudinary with metadata in context
    const result = await cloudinary.uploader.upload(
      `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`,
      {
        resource_type: 'auto',
        folder: GALLERY_FOLDER,
        context: {
          title: title,
          description: description,
          alt: title,
          caption: description
        },
        tags: ['gallery', 'kiran-advisory'],
        transformation: [
          { width: 800, height: 800, crop: 'limit', quality: 'auto' }
        ]
      }
    );

    console.log('📝 Upload result context:', result.context);
    console.log('📝 Upload result full:', JSON.stringify(result, null, 2));

    // If context is not stored, try to update it after upload
    if (!result.context || !result.context.title) {
      console.log('🔄 Context not stored, attempting to update metadata...');
      try {
        const updateResult = await cloudinary.uploader.update(result.public_id, {
          context: {
            title: title,
            description: description,
            alt: title,
            caption: description
          }
        });
        console.log('✅ Metadata updated successfully:', updateResult.context);
      } catch (updateError) {
        console.error('❌ Failed to update metadata:', updateError);
      }
    }

    // Store metadata in in-memory storage
    const imageId = result.asset_id || result.public_id;
    imageMetadata.set(imageId, {
      title: title,
      description: description,
      uploadedAt: result.created_at
    });

    console.log(`💾 Stored metadata in memory for image: ${imageId}`);

    // Return the uploaded image data
    const newImage = {
      id: imageId,
      title: title,
      description: description,
      url: result.secure_url,
      publicId: result.public_id,
      uploadedAt: result.created_at
    };

    console.log(`✅ Uploaded image to Cloudinary: ${title}`);
    res.json(newImage);

  } catch (error) {
    console.error('❌ Upload error:', error);
    res.status(500).json({ error: 'Failed to upload image' });
  }
});

// Route to refresh metadata from Cloudinary for existing images
app.post('/api/gallery/refresh-metadata', async (req, res) => {
  try {
    console.log('🔄 Refreshing metadata from Cloudinary...');
    
    // Fetch all images from Cloudinary gallery folder
    const result = await cloudinary.search
      .expression(`folder:${GALLERY_FOLDER}`)
      .max_results(100)
      .execute();

    let refreshedCount = 0;
    
    // Process each image to refresh metadata
    for (const resource of result.resources) {
      const imageId = resource.asset_id || resource.public_id;
      
      try {
        // Fetch full resource details from Cloudinary
        const fullResource = await cloudinary.api.resource(resource.public_id);
        
        // Extract metadata from Cloudinary
        const title = fullResource.context?.custom?.title ||
                     fullResource.context?.title || 
                     fullResource.context?.alt || 
                     fullResource.context?.caption ||
                     `Gallery Image ${refreshedCount + 1}`;
        
        const description = fullResource.context?.custom?.description ||
                           fullResource.context?.description || 
                           fullResource.context?.caption || 
                           '';
        
        // Update in-memory storage (for performance, but not critical for functionality)
        imageMetadata.set(imageId, {
          title: title,
          description: description,
          uploadedAt: fullResource.created_at
        });
        
        refreshedCount++;
        console.log(`✅ Refreshed metadata for ${resource.public_id}: "${title}"`);
        
      } catch (fetchError) {
        console.log(`⚠ Could not refresh metadata for ${resource.public_id}:`, fetchError.message);
      }
    }
    
    console.log(`✅ Refreshed metadata for ${refreshedCount} images`);
    res.json({ 
      message: `Successfully refreshed metadata for ${refreshedCount} images`,
      refreshedCount: refreshedCount
    });
    
  } catch (error) {
    console.error('❌ Error refreshing metadata:', error);
    res.status(500).json({ error: 'Failed to refresh metadata' });
  }
});

app.delete('/api/gallery/:id', async (req, res) => {
  try {
    const imageId = req.params.id;
    console.log(`🗑 Attempting to delete image with ID: ${imageId}`);
    
    // First, try to find the image to get the correct public_id
    const searchResult = await cloudinary.search
      .expression(`folder:${GALLERY_FOLDER}`)
      .max_results(100)
      .execute();
    
    const imageToDelete = searchResult.resources.find(img => 
      img.asset_id === imageId || img.public_id === imageId
    );
    
    if (!imageToDelete) {
      console.log(`❌ Image not found: ${imageId}`);
      return res.status(404).json({ error: 'Image not found or already deleted' });
    }
    
    console.log(`🔍 Found image to delete: ${imageToDelete.public_id}`);
    
    // Delete from Cloudinary using the public_id
    const result = await cloudinary.uploader.destroy(imageToDelete.public_id);
    
    if (result.result === 'ok') {
      // Remove metadata from in-memory storage
      imageMetadata.delete(imageId);
      console.log(`🗑 Removed metadata from memory for image: ${imageId}`);
      
      console.log(`✅ Deleted image from Cloudinary: ${imageToDelete.public_id}`);
      res.json({ message: 'Image deleted successfully' });
    } else {
      console.log(`❌ Failed to delete image: ${result.result}`);
      res.status(404).json({ error: 'Image not found or already deleted' });
    }

  } catch (error) {
    console.error('❌ Delete error:', error);
    res.status(500).json({ error: 'Failed to delete image' });
  }
});

// Serve React app for all other routes
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📸 Gallery API available at http://localhost:${PORT}/api/gallery`);
  console.log(`☁  Using Cloudinary folder: ${GALLERY_FOLDER}`);
  console.log(`💾 All data stored in Cloudinary - no local file dependencies`);
});