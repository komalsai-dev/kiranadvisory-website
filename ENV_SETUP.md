# Environment Setup Guide

## 📁 Create .env File

Create a `.env` file in your project root with the following content:

```env
# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=do2yfxwmo
CLOUDINARY_API_KEY=813716586858736
CLOUDINARY_API_SECRET=dRKfbLF-UxrupjA7bbOVtgnPVP8

# Admin Panel Configuration (Vite format)
VITE_ADMIN_PASSWORD=Kiran@123

# Server Configuration
PORT=3001

# Production Domain
PRODUCTION_DOMAIN=http://kiranadvisory.com
```

## 🚀 How to Create .env File:

### Option 1: Using VS Code
1. Right-click in your project root folder
2. Select "New File"
3. Name it `.env`
4. Copy the content above into the file

### Option 2: Using Command Line
```bash
# Windows
echo # Cloudinary Configuration > .env
echo CLOUDINARY_CLOUD_NAME=do2yfxwmo >> .env
echo CLOUDINARY_API_KEY=813716586858736 >> .env
echo CLOUDINARY_API_SECRET=dRKfbLF-UxrupjA7bbOVtgnPVP8 >> .env
echo. >> .env
echo # Admin Panel Configuration >> .env
echo REACT_APP_ADMIN_PASSWORD=Kiran@123 >> .env
echo. >> .env
echo # Server Configuration >> .env
echo PORT=3001 >> .env

# Mac/Linux
cat > .env << EOF
# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=do2yfxwmo
CLOUDINARY_API_KEY=813716586858736
CLOUDINARY_API_SECRET=dRKfbLF-UxrupjA7bbOVtgnPVP8

# Admin Panel Configuration (Vite format)
VITE_ADMIN_PASSWORD=Kiran@123

# Server Configuration
PORT=3001
EOF
```

## ✅ Benefits of Using .env:

1. **Security**: Sensitive data not in code
2. **Flexibility**: Easy to change without code changes
3. **Environment-specific**: Different values for dev/production
4. **Version Control**: .env files are typically ignored by git

## 🔒 Security Note:

- Never commit `.env` files to version control
- Use different passwords for production
- Keep your Cloudinary credentials secure

## 🎯 After Creating .env:

1. Restart your development server
2. Your admin password will be read from the environment variable
3. Server will use environment variables for Cloudinary configuration
