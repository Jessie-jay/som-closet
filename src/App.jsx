import { useState, useEffect } from 'react'
import Logo from './components/Logo'
import './App.css'

// Sample catalogue data matching the design
const catalogueItems = [
  {
    id: 1,
    name: 'ATSOBER Mr Free Graphic Tee',
    price: 12000,
    category: 'T-Shirts',
    image: '/Edited images/Design-01/view-01.png',
    images: [
      '/Edited images/Design-01/view-01.png',
      '/Edited images/Design-01/view-02.png',
      '/Edited images/Design-01/view-03.png',
      '/Edited images/Design-01/view-04.png',
      '/Edited images/Design-01/view-05.png',
      '/Edited images/Design-01/view-06.png',
      '/Edited images/Design-01/view-07.jpg'
    ],
    description: 'Oversized graphic tee featuring "ATSOBER Mr Free" design with anime-inspired artwork and sports car illustration. Premium cotton blend for maximum comfort.',
    colors: ['Brown'],
    colorOptions: [
      { name: 'Brown', class: 'bg-amber-900' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    details: 'Exclusive discounts on 5+ polo orders.'
  },
  {
    id: 2,
    name: 'Premium Polo Design 03',
    price: 12000,
    category: 'Polo',
    image: '/Edited images/Design-03/view-01.png',
    images: [
      '/Edited images/Design-03/view-01.png',
      '/Edited images/Design-03/view-02.png',
      '/Edited images/Design-03/view-03.png',
      '/Edited images/Design-03/view-04.png',
      '/Edited images/Design-03/view-05.png',
      '/Edited images/Design-03/view-06.png'
    ],
    description: 'Classic polo design with premium cotton fabric. Perfect for casual and semi-formal occasions.',
    colors: ['Pink'],
    colorOptions: [
      { name: 'Pink', class: 'bg-pink-200' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    details: 'Exclusive discounts on 5+ polo orders.'
  },
  {
    id: 3,
    name: 'Premium Polo Design 04',
    price: 12000,
    category: 'Polo',
    image: '/Edited images/Design-04/view-01.png',
    images: [
      '/Edited images/Design-04/view-01.png',
      '/Edited images/Design-04/view-02.png',
      '/Edited images/Design-04/view-03.png',
      '/Edited images/Design-04/view-04.png',
      '/Edited images/Design-04/view-05.png',
      '/Edited images/Design-04/view-06.png'
    ],
    description: 'Stylish polo with modern fit and premium materials. Ideal for everyday wear.',
    colors: ['Light Blue'],
    colorOptions: [
      { name: 'Light Blue', class: 'bg-sky-200' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    details: 'Exclusive discounts on 5+ polo orders.'
  },
  {
    id: 4,
    name: 'Premium Polo Design 05',
    price: 12000,
    category: 'Polo',
    image: '/Edited images/Design-05/view-01.png',
    images: [
      '/Edited images/Design-05/view-01.png',
      '/Edited images/Design-05/view-02.png',
      '/Edited images/Design-05/view-03.png',
      '/Edited images/Design-05/view-04.png',
      '/Edited images/Design-05/view-05.png',
      '/Edited images/Design-05/view-06.png'
    ],
    description: 'Contemporary polo shirt with refined details. Combines comfort with elegance.',
    colors: ['Navy Blue'],
    colorOptions: [
      { name: 'Navy Blue', class: 'bg-blue-900' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    details: 'Exclusive discounts on 5+ polo orders.'
  },
  {
    id: 5,
    name: 'Premium Polo Design 09',
    price: 12000,
    category: 'Polo',
    image: '/Edited images/Design-09/color-02/view-01.png',
    images: [
      '/Edited images/Design-09/color-02/view-01.png',
      '/Edited images/Design-09/color-02/view-02.png',
      '/Edited images/Design-09/color-02/view-03.png',
      '/Edited images/Design-09/color-02/view-04.jpg',
      '/Edited images/Design-09/color-02/view-05.png',
      '/Edited images/Design-09/color-02/view-06.png'
    ],
    description: 'Versatile polo design with multiple color options. Premium quality for lasting wear.',
    colors: ['Olive Green', 'Sky Blue', 'Burgundy'],
    colorOptions: [
      { 
        name: 'Olive Green', 
        class: 'bg-green-700',
        images: [
          '/Edited images/Design-09/color-02/view-01.png',
          '/Edited images/Design-09/color-02/view-02.png',
          '/Edited images/Design-09/color-02/view-03.png',
          '/Edited images/Design-09/color-02/view-04.jpg',
          '/Edited images/Design-09/color-02/view-05.png',
          '/Edited images/Design-09/color-02/view-06.png'
        ]
      },
      { 
        name: 'Sky Blue', 
        class: 'bg-sky-400',
        images: [
          '/Edited images/Design-09/color-01/view-01.png',
          '/Edited images/Design-09/color-01/view-02.png',
          '/Edited images/Design-09/color-01/view-03.png',
          '/Edited images/Design-09/color-01/view-04.jpg',
          '/Edited images/Design-09/color-01/view-05.png',
          '/Edited images/Design-09/color-01/view-06.png'
        ]
      },
      { 
        name: 'Burgundy', 
        class: 'bg-rose-900',
        images: [
          '/Edited images/Design-09/color-03/view-01.png',
          '/Edited images/Design-09/color-03/view-02.png',
          '/Edited images/Design-09/color-03/view-03.png',
          '/Edited images/Design-09/color-03/view-04.jpg',
          '/Edited images/Design-09/color-03/view-05.png',
          '/Edited images/Design-09/color-03/view-06.png'
        ]
      }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    details: 'Exclusive discounts on 5+ polo orders.'
  },
  {
    id: 6,
    name: 'Premium Polo Design 11',
    price: 12000,
    category: 'Polo',
    image: '/Edited images/Design-11/color-01/view-01.png',
    images: [
      '/Edited images/Design-11/color-01/view-01.png',
      '/Edited images/Design-11/color-01/view-02.png',
      '/Edited images/Design-11/color-01/view-03.png',
      '/Edited images/Design-11/color-01/view-04.png',
      '/Edited images/Design-11/color-01/view-05.png',
      '/Edited images/Design-11/color-01/view-06.png'
    ],
    description: 'Modern polo design with attention to detail. Crafted for style and comfort.',
    colors: ['White', 'Burgundy'],
    colorOptions: [
      { 
        name: 'White', 
        class: 'bg-white',
        images: [
          '/Edited images/Design-11/color-01/view-01.png',
          '/Edited images/Design-11/color-01/view-02.png',
          '/Edited images/Design-11/color-01/view-03.png',
          '/Edited images/Design-11/color-01/view-04.png',
          '/Edited images/Design-11/color-01/view-05.png',
          '/Edited images/Design-11/color-01/view-06.png'
        ]
      },
      { 
        name: 'Burgundy', 
        class: 'bg-rose-900',
        images: [
          '/Edited images/Design-11/color-02/view-01.png',
          '/Edited images/Design-11/color-02/view-02.png',
          '/Edited images/Design-11/color-02/view-03.png',
          '/Edited images/Design-11/color-02/view-04.jpg',
          '/Edited images/Design-11/color-02/view-05.png',
          '/Edited images/Design-11/color-02/view-06.png'
        ]
      }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    details: 'Exclusive discounts on 5+ polo orders.'
  },
  {
    id: 7,
    name: 'Premium Polo Design 02',
    price: 12000,
    category: 'Polo',
    image: '/Edited images/Design-02/color-01/view-01.png',
    images: [
      '/Edited images/Design-02/color-01/view-01.png',
      '/Edited images/Design-02/color-01/view-02.png',
      '/Edited images/Design-02/color-01/view-03.png',
      '/Edited images/Design-02/color-01/view-04.png',
      '/Edited images/Design-02/color-01/view-05.png',
      '/Edited images/Design-02/color-01/view-06.png'
    ],
    description: 'Elegant polo design with superior craftsmanship. Perfect for any occasion.',
    colors: ['Black'],
    colorOptions: [
      { name: 'Black', class: 'bg-black' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    details: 'Exclusive discounts on 5+ polo orders.'
  },
  {
    id: 8,
    name: 'Premium Polo Design 07',
    price: 12000,
    category: 'Polo',
    image: '/Edited images/Design-07/color-01/view-01.png',
    images: [
      '/Edited images/Design-07/color-01/view-01.png',
      '/Edited images/Design-07/color-01/view-02.png',
      '/Edited images/Design-07/color-01/view-03.png',
      '/Edited images/Design-07/color-01/view-04.png',
      '/Edited images/Design-07/color-01/view-05.png',
      '/Edited images/Design-07/color-01/view-06.png'
    ],
    description: 'Contemporary polo with refined aesthetics. Combines tradition with modern style.',
    colors: ['Black', 'Light Blue'],
    colorOptions: [
      { 
        name: 'Black', 
        class: 'bg-black',
        images: [
          '/Edited images/Design-07/color-01/view-01.png',
          '/Edited images/Design-07/color-01/view-02.png',
          '/Edited images/Design-07/color-01/view-03.png',
          '/Edited images/Design-07/color-01/view-04.png',
          '/Edited images/Design-07/color-01/view-05.png',
          '/Edited images/Design-07/color-01/view-06.png'
        ]
      },
      { 
        name: 'Light Blue', 
        class: 'bg-sky-300',
        images: [
          '/Edited images/Design-07/color-02/view-01.png',
          '/Edited images/Design-07/color-02/view-02.png',
          '/Edited images/Design-07/color-02/view-03.png',
          '/Edited images/Design-07/color-02/view-04.jpg',
          '/Edited images/Design-07/color-02/view-05.png',
          '/Edited images/Design-07/color-02/view-06.png'
        ]
      }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    details: 'Exclusive discounts on 5+ polo orders.'
  },
  {
    id: 9,
    name: 'Premium Polo Design 08',
    price: 12000,
    category: 'Polo',
    image: '/Edited images/Design-08/color-01/view-01.png',
    images: [
      '/Edited images/Design-08/color-01/view-01.png',
      '/Edited images/Design-08/color-01/view-02.png',
      '/Edited images/Design-08/color-01/view-03.png',
      '/Edited images/Design-08/color-01/view-04.jpg',
      '/Edited images/Design-08/color-01/view-05.png',
      '/Edited images/Design-08/color-01/view-06.png'
    ],
    description: 'Sophisticated polo design with exceptional quality. Timeless style for the modern wardrobe.',
    colors: ['Orange', 'Pink', 'White'],
    colorOptions: [
      { 
        name: 'Orange', 
        class: 'bg-orange-400',
        images: [
          '/Edited images/Design-08/color-01/view-01.png',
          '/Edited images/Design-08/color-01/view-02.png',
          '/Edited images/Design-08/color-01/view-03.png',
          '/Edited images/Design-08/color-01/view-04.jpg',
          '/Edited images/Design-08/color-01/view-05.png',
          '/Edited images/Design-08/color-01/view-06.png'
        ]
      },
      { 
        name: 'Pink', 
        class: 'bg-pink-300',
        images: [
          '/Edited images/Design-08/color-02/view-01.png',
          '/Edited images/Design-08/color-02/view-02.png',
          '/Edited images/Design-08/color-02/view-03.png',
          '/Edited images/Design-08/color-02/view-04.png',
          '/Edited images/Design-08/color-02/view-05.jpg',
          '/Edited images/Design-08/color-02/view-06.png',
          '/Edited images/Design-08/color-02/view-07.png'
        ]
      },
      { 
        name: 'White', 
        class: 'bg-white',
        images: [
          '/Edited images/Design-08/color-03/view-01.png',
          '/Edited images/Design-08/color-03/view-02.png',
          '/Edited images/Design-08/color-03/view-03.png',
          '/Edited images/Design-08/color-03/view-04.png',
          '/Edited images/Design-08/color-03/view-05.png',
          '/Edited images/Design-08/color-03/view-06.png'
        ]
      }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    details: 'Exclusive discounts on 5+ polo orders.'
  },
  {
    id: 10,
    name: 'Premium Polo Design 10',
    price: 12000,
    category: 'Polo',
    image: '/Edited images/Design-10/color-01/view-01.png',
    images: [
      '/Edited images/Design-10/color-01/view-01.png',
      '/Edited images/Design-10/color-01/view-02.png',
      '/Edited images/Design-10/color-01/view-03.png',
      '/Edited images/Design-10/color-01/view-04.png',
      '/Edited images/Design-10/color-01/view-05.png',
      '/Edited images/Design-10/color-01/view-06.png'
    ],
    description: 'Premium quality polo with distinctive design elements. Built for comfort and durability.',
    colors: ['Lavender', 'Grey'],
    colorOptions: [
      { 
        name: 'Lavender', 
        class: 'bg-purple-300',
        images: [
          '/Edited images/Design-10/color-01/view-01.png',
          '/Edited images/Design-10/color-01/view-02.png',
          '/Edited images/Design-10/color-01/view-03.png',
          '/Edited images/Design-10/color-01/view-04.png',
          '/Edited images/Design-10/color-01/view-05.png',
          '/Edited images/Design-10/color-01/view-06.png'
        ]
      },
      { 
        name: 'Grey', 
        class: 'bg-gray-500',
        images: [
          '/Edited images/Design-10/color-02/view-01.png',
          '/Edited images/Design-10/color-02/view-02.png',
          '/Edited images/Design-10/color-02/view-03.png',
          '/Edited images/Design-10/color-02/view-04.png',
          '/Edited images/Design-10/color-02/view-05.png',
          '/Edited images/Design-10/color-02/view-06.png'
        ]
      }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    details: 'Exclusive discounts on 5+ polo orders.'
  }
]

function App() {
  const [selectedItem, setSelectedItem] = useState(null)
  const [selectedColor, setSelectedColor] = useState(null)
  const [selectedColorOption, setSelectedColorOption] = useState(null)
  const [selectedColorIndex, setSelectedColorIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showFilterModal, setShowFilterModal] = useState(false)
  const [filterColor, setFilterColor] = useState('')
  const [showColorDropdown, setShowColorDropdown] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const [notifications, setNotifications] = useState([])
  const [unreadCount, setUnreadCount] = useState(0)

  // Check if user just returned from WhatsApp
  useEffect(() => {
    // Load notifications from localStorage
    const savedNotifications = localStorage.getItem('notifications')
    if (savedNotifications) {
      const parsedNotifications = JSON.parse(savedNotifications)
      setNotifications(parsedNotifications)
      const unread = parsedNotifications.filter(n => !n.read).length
      setUnreadCount(unread)
    }

    const createNotification = () => {
      if (!selectedItem) return

      const newNotification = {
        id: Date.now(),
        type: 'order',
        title: 'Your order has been verified',
        message: `We have successfully verified your order for your "${selectedItem.name}" (${selectedColorOption?.name || selectedItem.colors[0]} - Qty: ${quantity}).`,
        timestamp: new Date().toISOString(),
        read: false,
        productName: selectedItem.name,
        color: selectedColorOption?.name || selectedItem.colors[0],
        quantity: quantity,
        price: selectedItem.price * quantity
      }

      setNotifications(prev => {
        const updated = [newNotification, ...prev]
        localStorage.setItem('notifications', JSON.stringify(updated))
        return updated
      })
      setUnreadCount(prev => prev + 1)
    }

    // Check on mount
    if (localStorage.getItem('orderPending') === 'true') {
      localStorage.removeItem('orderPending')
      createNotification()
      setShowSuccessModal(true)
    }

    // Check when user returns to the tab/app
    const handleVisibilityChange = () => {
      if (!document.hidden && localStorage.getItem('orderPending') === 'true') {
        localStorage.removeItem('orderPending')
        createNotification()
        setShowSuccessModal(true)
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [selectedItem, selectedColorOption, quantity])

  const handleItemClick = (item) => {
    setSelectedItem(item)
    setSelectedColor(item.colors[0])
    setSelectedColorOption(item.colorOptions ? item.colorOptions[0] : null)
    setSelectedColorIndex(0)
    setQuantity(1)
    setCurrentImageIndex(0)
  }

  const handleColorChange = (colorOption, index) => {
    setSelectedColorOption(colorOption)
    setSelectedColorIndex(index)
    setCurrentImageIndex(0)
  }

  const handleClose = () => {
    setSelectedItem(null)
    setCurrentImageIndex(0)
    setSelectedColorIndex(0)
  }

  const handleClearFilters = () => {
    setFilterColor('')
  }

  const handleColorSelect = (color) => {
    setFilterColor(color)
    setShowColorDropdown(false)
  }

  const handleWhatsAppClick = () => {
    // Mark that user is going to WhatsApp to place an order
    localStorage.setItem('orderPending', 'true')
  }

  const markAllAsRead = () => {
    const updatedNotifications = notifications.map(n => ({ ...n, read: true }))
    setNotifications(updatedNotifications)
    setUnreadCount(0)
    localStorage.setItem('notifications', JSON.stringify(updatedNotifications))
  }

  const deleteNotification = (id) => {
    const updatedNotifications = notifications.filter(n => n.id !== id)
    setNotifications(updatedNotifications)
    const unread = updatedNotifications.filter(n => !n.read).length
    setUnreadCount(unread)
    localStorage.setItem('notifications', JSON.stringify(updatedNotifications))
  }

  const formatTimeAgo = (timestamp) => {
    const now = new Date()
    const time = new Date(timestamp)
    const diffInSeconds = Math.floor((now - time) / 1000)

    if (diffInSeconds < 60) return 'Just now'
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`
    return `${Math.floor(diffInSeconds / 86400)}d ago`
  }

  // Get all unique colors from all products
  const getAllColors = () => {
    const colorsSet = new Set()
    catalogueItems.forEach(item => {
      if (item.colorOptions) {
        item.colorOptions.forEach(colorOption => {
          colorsSet.add(colorOption.name)
        })
      }
    })
    return Array.from(colorsSet).sort()
  }

  // Filter items based on selected color
  const getFilteredItems = () => {
    if (!filterColor) return catalogueItems
    
    return catalogueItems.filter(item => {
      if (!item.colorOptions) return false
      return item.colorOptions.some(colorOption => 
        colorOption.name.toLowerCase() === filterColor.toLowerCase()
      )
    })
  }

  const filteredItems = getFilteredItems()

  // Get current images based on selected color
  const getCurrentImages = () => {
    if (!selectedItem) return []
    
    // If colorOptions has images array for each color, use those
    if (selectedColorOption && selectedColorOption.images) {
      return selectedColorOption.images
    }
    
    // Otherwise use the main images array
    return selectedItem.images
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Header */}
      <header className="bg-gray-100 sticky top-0 z-20 px-4 py-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <img src="/logo.svg" alt="Som Closet Logo" className="h-8 w-8" />
              <span className="text-lg font-bold text-gray-900 tracking-tight">Som Closet</span>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setShowFilterModal(true)}
                className="p-2 bg-gray-100 rounded-full"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              </button>
              <button 
                onClick={() => setShowNotifications(true)}
                className="p-2 bg-gray-100 rounded-full relative"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                {unreadCount > 0 && (
                  <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                    {unreadCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Promotional Banner */}
      <div className="sticky top-[73px] z-10 px-4 pb-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-gradient-to-r from-blue-500 via-blue-400 to-sky-300 rounded-3xl overflow-hidden h-32">
            {/* Fashion Model Image - Right Side (transparent bg) */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-center">
              <img 
                src="/shopper.png" 
                alt="Happy shopper"
                className="h-full w-auto object-contain"
              />
            </div>
            
            {/* Content - Left Side */}
            <div className="relative z-10 p-5 flex flex-col justify-center h-full max-w-[55%]">
              <p className="text-white text-lg font-bold leading-tight drop-shadow-lg">
                <span className="text-3xl font-extrabold">16%</span> off when you shop 5+ polos!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Finds Section */}
      <div className="px-4 mb-12 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Active Filter Display */}
          {filterColor && (
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                <span>{filterColor}</span>
              </div>
              <button 
                onClick={handleClearFilters}
                className="text-sm text-gray-600 hover:text-gray-900 underline font-medium"
              >
                Clear Filters
              </button>
            </div>
          )}

          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Printed Polos</h2>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              <span className="text-orange-600 font-semibold text-base">₦12,000</span>
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="grid grid-cols-2 gap-3">
            {filteredItems.map(item => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200"
              >
                <div 
                  onClick={() => handleItemClick(item)}
                  className="cursor-pointer"
                >
                  <div className="relative aspect-[3/4] bg-white overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                    
                    {/* Bottom overlay for buttons */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 flex items-center justify-between">
                      {/* View button - Bottom left */}
                      <button className="bg-gray-200 rounded-full px-2 h-7 flex items-center gap-1 shadow-sm hover:bg-gray-300 transition-colors">
                        <svg className="w-3.5 h-3.5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                        <span className="text-xs font-medium text-black">View</span>
                      </button>
                      
                      {/* Color Icons - Bottom right */}
                      {item.colorOptions && item.colorOptions.length > 0 && (
                        <div className="flex gap-1 h-7 items-center">
                          {item.colorOptions.map((color, idx) => (
                            <div
                              key={idx}
                              className={`w-3 h-3 rounded-full ${color.class} ${
                                idx === 0 ? 'ring-1 ring-gray-800 ring-offset-1' : 'ring-1 ring-gray-200'
                              } shadow-sm`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/2347039619632?text=I%20need%20a%20polo"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-colors z-30"
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* Filter Modal */}
      {showFilterModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-stretch justify-end">
          <div className="bg-white w-[80%] h-full shadow-2xl flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">FILTER BY COLOR</h3>
              <button 
                onClick={() => setShowFilterModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 p-6 overflow-y-auto">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Select Color
              </label>
              
              {/* Custom Dropdown Trigger */}
              <button
                onClick={() => setShowColorDropdown(!showColorDropdown)}
                className="w-full px-4 py-4 border-2 border-gray-300 rounded-2xl text-left flex items-center justify-between bg-white hover:border-gray-400 transition-colors"
              >
                <span className="text-base font-medium text-gray-900">
                  {filterColor || 'All Colors'}
                </span>
                <svg 
                  className={`w-5 h-5 text-gray-600 transition-transform ${showColorDropdown ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Custom Dropdown List */}
              {showColorDropdown && (
                <div className="mt-3 border-2 border-gray-300 rounded-2xl overflow-hidden bg-white shadow-lg max-h-80 overflow-y-auto">
                  {/* All Colors Option */}
                  <button
                    onClick={() => handleColorSelect('')}
                    className={`w-full px-5 py-3 text-left text-sm font-medium transition-colors ${
                      filterColor === '' 
                        ? 'bg-gray-800 text-white' 
                        : 'bg-white text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    ALL COLORS
                  </button>
                  
                  {/* Color Options */}
                  {getAllColors().map((color) => (
                    <button
                      key={color}
                      onClick={() => handleColorSelect(color)}
                      className={`w-full px-5 py-3 text-left text-sm font-medium transition-colors border-t border-gray-200 ${
                        filterColor === color 
                          ? 'bg-gray-800 text-white' 
                          : 'bg-white text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      {color.toUpperCase()}
                    </button>
                  ))}
                </div>
              )}

              {/* Apply Filter Button - Closer to dropdown */}
              <div className="mt-6">
                <button
                  onClick={() => setShowFilterModal(false)}
                  className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
                >
                  APPLY FILTER
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Product Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
              <button onClick={handleClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="flex items-center gap-4">
                <button className="p-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <button 
                  onClick={() => setShowNotifications(true)}
                  className="p-2 relative"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  {unreadCount > 0 && (
                    <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                      {unreadCount}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto -mt-px">
            {/* Product Image Carousel */}
            <div className="aspect-[3/4] relative">
              <img
                src={getCurrentImages()[currentImageIndex]}
                alt={selectedItem.name}
                className="w-full h-full object-contain"
                loading="lazy"
              />
              
              {/* Carousel Navigation Arrows */}
              {getCurrentImages().length > 1 && (
                <>
                  <button
                    onClick={() => setCurrentImageIndex((prev) => 
                      prev === 0 ? getCurrentImages().length - 1 : prev - 1
                    )}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setCurrentImageIndex((prev) => 
                      prev === getCurrentImages().length - 1 ? 0 : prev + 1
                    )}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Image Navigation Dots */}
            {getCurrentImages().length > 1 && (
              <div className="flex justify-center gap-2 py-2">
                {getCurrentImages().map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      idx === currentImageIndex ? 'bg-black' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Product Info */}
            <div className="px-4 pb-32">
              <h1 className="text-2xl font-medium tracking-wide uppercase mb-2">
                {selectedItem.name}
              </h1>
              <p className="text-xl mb-4">₦{selectedItem.price.toLocaleString()}</p>
              <p className="text-sm text-gray-600 mb-6">{selectedItem.details}</p>

              {/* Color Selection */}
              {selectedItem.colorOptions && (
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium">Color</label>
                    <span className="text-sm text-gray-600">{selectedColorOption?.name || selectedItem.colors[selectedColorIndex]}</span>
                  </div>
                  <div className="flex gap-3">
                    {selectedItem.colorOptions.map((color, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleColorChange(color, idx)}
                        className={`w-12 h-12 rounded-full ${color.class} transition-all ${
                          selectedColorIndex === idx
                            ? 'ring-2 ring-black ring-offset-2'
                            : 'ring-1 ring-gray-300'
                        }`}
                      />
                    ))}
                    {selectedItem.hasMoreColors && (
                      <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-xs">
                        +1
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Quantity Selector - Compact & Aesthetic */}
              <div className="mb-6">
                <label className="text-sm font-medium block mb-3">Quantity</label>
                <div className="flex items-center gap-4 w-40">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center hover:border-black transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <span className="flex-1 text-center font-medium text-lg">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center hover:border-black transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Fixed Bottom CTA */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
            <div className="max-w-2xl mx-auto">
              <a
                href={`https://wa.me/2347039619632?text=${encodeURIComponent(
                  `Hi! I want to order:\n\n` +
                  `📦 Product: ${selectedItem.name}\n` +
                  `🎨 Color: ${selectedColorOption?.name || selectedItem.colors[selectedColorIndex]}\n` +
                  `📊 Quantity: ${quantity}\n` +
                  `💰 Total: ₦${(selectedItem.price * quantity).toLocaleString()}\n\n` +
                  `🖼️ Product Image:\n${window.location.origin}${getCurrentImages()[currentImageIndex]}\n\n` +
                  `Please confirm this order. Thank you!`
                )}`}
                onClick={handleWhatsAppClick}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-black text-white rounded-full text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors flex items-center justify-center"
              >
                Add to cart • ₦{(selectedItem.price * quantity).toLocaleString()}
              </a>
              <button
                onClick={handleClose}
                className="w-full mt-3 py-4 text-sm font-medium uppercase tracking-wide hover:bg-gray-50 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Notifications Screen */}
      {showNotifications && (
        <div className="fixed inset-0 bg-gray-50 z-50 flex flex-col">
          {/* Header */}
          <div className="sticky top-0 bg-white z-10">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <button 
                  onClick={() => setShowNotifications(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <h1 className="text-xl font-bold text-gray-900">
                  Notifications
                </h1>
                <div className="w-10"></div>
              </div>
            </div>
          </div>

          {/* Notifications List */}
          <div className="flex-1 overflow-y-auto px-4 pb-6">
            <div className="max-w-7xl mx-auto">
              {/* Today Section */}
              <h2 className="text-sm font-semibold text-gray-900 mb-4 mt-6">Today</h2>

              {notifications.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                  <h3 className="text-base font-medium text-gray-900 mb-1">
                    No notifications yet
                  </h3>
                  <p className="text-sm text-gray-600">
                    You'll see order confirmations and updates here
                  </p>
                </div>
              ) : (
                notifications.map((notification) => (
                  <div
                    key={notification.id}
                    onClick={() => {
                      if (!notification.read) {
                        const updatedNotifications = notifications.map(n =>
                          n.id === notification.id ? { ...n, read: true } : n
                        )
                        setNotifications(updatedNotifications)
                        setUnreadCount(updatedNotifications.filter(n => !n.read).length)
                        localStorage.setItem('notifications', JSON.stringify(updatedNotifications))
                      }
                    }}
                    className={`rounded-2xl p-4 mb-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer ${
                      !notification.read ? 'bg-blue-50' : 'bg-white'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {/* Icon */}
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className="text-sm font-semibold text-gray-900">
                            {notification.title}
                          </h3>
                          <span className="text-xs text-gray-500 flex-shrink-0">
                            {formatTimeAgo(notification.timestamp)}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {notification.message}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* Success Modal - Slides up from bottom */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white w-full h-[60%] rounded-t-3xl shadow-2xl flex flex-col relative">
            {/* Cancel Button - Top Right */}
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Content - Centered */}
            <div className="flex-1 flex flex-col items-center justify-center p-8">
              {/* Success Icon */}
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              {/* Success Text */}
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Order Successful!</h2>
              <p className="text-base text-gray-600 text-center mb-8">
                Your order has been sent via WhatsApp.<br />We'll process it shortly.
              </p>

              {/* Continue Shopping Button */}
              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full max-w-md bg-black text-white py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
