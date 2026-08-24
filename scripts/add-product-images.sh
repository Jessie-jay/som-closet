#!/bin/bash

# Script to help organize product images into the correct folder structure
# Usage: ./scripts/add-product-images.sh <design-number> <color-number> <source-folder>
# Example: ./scripts/add-product-images.sh 01 01 ~/Downloads/polo-images/

if [ $# -lt 3 ]; then
    echo "Usage: $0 <design-number> <color-number> <source-folder>"
    echo "Example: $0 01 01 ~/Downloads/polo-images/"
    exit 1
fi

DESIGN=$1
COLOR=$2
SOURCE=$3

# Format with leading zeros if needed
DESIGN_PADDED=$(printf "%02d" $DESIGN)
COLOR_PADDED=$(printf "%02d" $COLOR)

TARGET_DIR="public/products/design-${DESIGN_PADDED}/color-${COLOR_PADDED}"

# Create target directory if it doesn't exist
mkdir -p "$TARGET_DIR"

echo "📁 Target directory: $TARGET_DIR"
echo "📂 Source folder: $SOURCE"
echo ""

# Counter for view numbering
counter=1

# Process each image in source folder
for img in "$SOURCE"/*.{jpg,jpeg,png,JPG,JPEG,PNG} 2>/dev/null; do
    if [ -f "$img" ]; then
        # Get file extension
        ext="${img##*.}"
        
        # Create new filename with sequential numbering
        new_name="view-$(printf "%02d" $counter).${ext,,}"
        
        # Copy to target directory
        cp "$img" "$TARGET_DIR/$new_name"
        echo "✓ Copied: $(basename "$img") → $new_name"
        
        ((counter++))
    fi
done

if [ $counter -eq 1 ]; then
    echo "❌ No images found in $SOURCE"
    exit 1
fi

echo ""
echo "✅ Successfully added $((counter-1)) images to $TARGET_DIR"
echo ""
echo "Update your catalogue item in src/App.jsx with:"
echo "  image: '/products/design-${DESIGN_PADDED}/color-${COLOR_PADDED}/view-01.jpg',"
echo "  images: ["
for ((i=1; i<counter; i++)); do
    echo "    '/products/design-${DESIGN_PADDED}/color-${COLOR_PADDED}/view-$(printf "%02d" $i).jpg',"
done
echo "  ]"
