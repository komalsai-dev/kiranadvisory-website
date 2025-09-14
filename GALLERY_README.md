# Gallery & Admin Panel Documentation

## Overview
This project now includes a Gallery section and an Admin Panel for managing gallery images.

## Features

### Gallery Section
- **Location**: Main website homepage (between Testimonials and FAQ sections)
- **Features**:
  - Responsive grid layout
  - Image modal for full-size viewing
  - Hover effects and smooth animations
  - Empty state when no images are present

### Admin Panel
- **URL**: `http://kiranadvisory.com/moderation`
- **Password**: `admin123`
- **Features**:
  - Secure login with password protection
  - Upload new images (JPG, PNG, GIF - max 5MB)
  - Add titles and descriptions to images
  - Delete existing images
  - Real-time preview of gallery changes

## How to Use

### For Website Visitors
1. Visit the main website
2. Scroll down to the Gallery section
3. Click on any image to view it in full size
4. Use the modal to view image details

### For Admin Users
1. Navigate to `http://kiranadvisory.com/moderation`
2. Enter password: `admin123`
3. Click "Login"

#### Adding Images
1. Click "Add New Image" button
2. Select an image file (max 5MB)
3. Optionally add a title and description
4. Click "Upload Image"

#### Deleting Images
1. Find the image you want to delete
2. Click the "Delete" button on the image card
3. Confirm the deletion

## Technical Details

### Data Storage
- Images are stored in browser's localStorage as base64 encoded strings
- Data persists across browser sessions
- Changes are immediately reflected on the main website

### File Support
- **Supported formats**: JPG, JPEG, PNG, GIF
- **Maximum file size**: 5MB
- **Image optimization**: Images are converted to base64 for storage

### Security
- Admin panel is password protected
- Password is hardcoded as `admin123` (can be changed in AdminPanel.jsx)
- No server-side authentication (client-side only)

## Customization

### Changing Admin Password
Edit the `ADMIN_PASSWORD` constant in `src/components/AdminPanel.jsx`:
```javascript
const ADMIN_PASSWORD = 'your-new-password';
```

### Modifying Gallery Layout
Edit the Gallery component in `src/components/Gallery.jsx` to change:
- Grid columns (currently 4 columns on large screens)
- Image aspect ratio
- Hover effects
- Modal behavior

### Styling
Gallery and admin panel styles are defined in `src/index.css` under:
- `.gallery-item` - Gallery image styling
- `.admin-card` - Admin panel card styling
- `.login-card` - Login form styling

## Browser Compatibility
- Modern browsers with localStorage support
- Responsive design works on desktop, tablet, and mobile
- Uses Bootstrap 5 for responsive grid system

## Notes
- Images are stored locally in the browser - they won't persist across different browsers/devices
- For production use, consider implementing server-side storage
- The admin panel is accessible to anyone who knows the URL and password
