# Product Images Folder Structure

## Overview
This folder contains all product images organized by design and color variants.

## Structure
```
products/
├── design-01/          # First polo design
│   ├── color-01/      # First color variant
│   │   ├── view-01.jpg  # Main homepage image
│   │   ├── view-02.jpg  # Detail page gallery images
│   │   ├── view-03.jpg
│   │   └── ...
│   ├── color-02/      # Second color variant
│   │   └── ...
│   └── color-03/      # Third color variant
│       └── ...
├── design-02/          # Second polo design
│   └── ...
└── design-12/          # Twelfth polo design
    └── ...
```

## Naming Convention

### Design Folders
- **Format**: `design-XX` (where XX is 01-12)
- **Example**: `design-01`, `design-02`, etc.
- Each represents a unique polo design

### Color Folders
- **Format**: `color-XX` (where XX starts from 01)
- **Example**: `color-01`, `color-02`, etc.
- Each represents a different color variant of the same design

### Image Files
- **Format**: `view-XX.jpg` (where XX starts from 01)
- **Example**: `view-01.jpg`, `view-02.jpg`, etc.
- Each represents a different viewpoint/angle of the same color variant
- **Homepage**: Always use `view-01.jpg` as the main card image
- **Detail Page**: Use all views (view-01.jpg through view-XX.jpg) in the gallery

## Usage in Code

### Single Product Example
```javascript
{
  id: 1,
  name: 'Product Name',
  image: '/products/design-01/color-01/view-01.jpg',  // Homepage
  images: [
    '/products/design-01/color-01/view-01.jpg',
    '/products/design-01/color-01/view-02.jpg',
    '/products/design-01/color-01/view-03.jpg',
    // ... more views
  ]
}
```

### Multiple Colors Example
```javascript
colors: [
  {
    name: 'Black',
    images: [
      '/products/design-01/color-01/view-01.jpg',
      '/products/design-01/color-01/view-02.jpg'
    ]
  },
  {
    name: 'White',
    images: [
      '/products/design-01/color-02/view-01.jpg',
      '/products/design-01/color-02/view-02.jpg'
    ]
  }
]
```

## Adding New Images

1. Identify the design number (01-12)
2. Determine if it's a new color variant or existing
3. Create color folder if needed: `mkdir -p public/products/design-XX/color-YY`
4. Add images with sequential numbering: `view-01.jpg`, `view-02.jpg`, etc.
5. Update `src/App.jsx` with the new paths

## Notes
- Always use `view-01.jpg` as the main image for product cards
- Include multiple views in the detail page gallery for better customer experience
- Keep image dimensions consistent for better layout
- Compress images before adding to improve load times
