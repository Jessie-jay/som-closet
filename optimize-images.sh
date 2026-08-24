#!/bin/bash

# Image optimization script for Som Closet catalogue
# This script resizes and compresses images for faster web loading

echo "🖼️  Starting image optimization..."

# Create backup directory
BACKUP_DIR="public/Edited images_backup_$(date +%Y%m%d_%H%M%S)"
echo "📦 Creating backup at: $BACKUP_DIR"
cp -r "public/Edited images" "$BACKUP_DIR"

# Counter
count=0

# Find and optimize all PNG and JPG images
find "public/Edited images" -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) | while read -r img; do
    # Get original size
    original_size=$(ls -lh "$img" | awk '{print $5}')
    
    # Resize to max width of 800px (maintains aspect ratio)
    # And reduce quality to 85% for JPG, optimize PNG
    if [[ "$img" == *.png ]]; then
        sips -Z 800 "$img" &> /dev/null
    else
        sips -Z 800 -s format jpeg -s formatOptions 85 "$img" &> /dev/null
    fi
    
    # Get new size
    new_size=$(ls -lh "$img" | awk '{print $5}')
    
    count=$((count + 1))
    echo "✓ Optimized ($count): $(basename "$img") | $original_size → $new_size"
done

echo ""
echo "✅ Optimization complete! Optimized $count images"
echo "📁 Original images backed up to: $BACKUP_DIR"
echo ""
echo "💡 To deploy: git add . && git commit -m 'Optimize images' && git push"
