import { useState, useEffect } from 'react'

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  priority = false,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [imageSrc, setImageSrc] = useState(null)

  useEffect(() => {
    // Preload the image
    const img = new Image()
    img.src = src
    
    img.onload = () => {
      setImageSrc(src)
      setIsLoaded(true)
    }

    // Cleanup
    return () => {
      img.onload = null
    }
  }, [src])

  return (
    <div className={`relative ${className}`}>
      {/* Blur placeholder while loading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <svg 
            className="w-12 h-12 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
            />
          </svg>
        </div>
      )}
      
      {/* Actual image with fade-in */}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          className={`w-full h-full object-contain transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading={priority ? 'eager' : 'lazy'}
          {...props}
        />
      )}
    </div>
  )
}

export default OptimizedImage
