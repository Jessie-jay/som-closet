#!/bin/bash

# Convert all PNG and JPG images to WebP format for better compression
# WebP typically provides 25-35% better compression than PNG/JPEG

SOURCE_DIR="public/Edited images"
TOTAL=0
CONVERTED=0

echo "🔄 Converting images to WebP format..."
echo "This will create .webp versions alongside originals"
echo "=================================================="

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
    echo "❌ Error: cwebp is not installed"
    echo ""
    echo "Please install it first:"
    echo "  brew install webp"
    exit 1
fi

# Find all PNG and JPG files and convert them
find "$SOURCE_DIR" -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) | while read -r file; do
    TOTAL=$((TOTAL + 1))
    
    # Get the output filename (replace extension with .webp)
    output="${file%.*}.webp"
    
    # Skip if WebP already exists and is newer
    if [ -f "$output" ] && [ "$output" -nt "$file" ]; then
        echo "⏭️  Skipping (already exists): $file"
        continue
    fi
    
    # Convert to WebP with quality 85 (good balance of size and quality)
    if cwebp -q 85 -quiet "$file" -o "$output" 2>/dev/null; then
        # Get file sizes
        original_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
        webp_size=$(stat -f%z "$output" 2>/dev/null || stat -c%s "$output" 2>/dev/null)
        
        # Calculate savings
        if [ "$original_size" -gt 0 ]; then
            savings=$((100 - (webp_size * 100 / original_size)))
            echo "✅ Converted: $(basename "$file") → $(basename "$output") (${savings}% smaller)"
        fi
        
        CONVERTED=$((CONVERTED + 1))
    else
        echo "❌ Failed: $file"
    fi
done

echo ""
echo "=================================================="
echo "✨ Conversion complete!"
echo "📊 Converted $CONVERTED images"
echo ""
echo "Next steps:"
echo "1. Update your code to use .webp extensions"
echo "2. Add fallback for browsers that don't support WebP"
