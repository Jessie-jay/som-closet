# Mobile Catalogue Experience

A mobile-first catalogue application built with React and Tailwind CSS.

## Features

- 📱 **Mobile-First Design**: Optimized for mobile devices with responsive layout
- 🔍 **Search Functionality**: Search products by name or description
- 🏷️ **Category Filtering**: Filter products by category (Electronics, Fashion, Sports, Home)
- 🎨 **Modern UI**: Clean, modern design with Tailwind CSS
- 📦 **Product Details**: Click any product to view detailed information
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and builds

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
catalogue/
├── src/
│   ├── App.jsx          # Main application component with catalogue logic
│   ├── App.css          # Custom styles
│   ├── index.css        # Tailwind CSS imports and global styles
│   └── main.jsx         # Application entry point
├── public/              # Static assets
├── index.html           # HTML template
└── package.json         # Dependencies and scripts
```

## Customization

### Adding Products

Edit the `catalogueItems` array in `src/App.jsx`:

```javascript
const catalogueItems = [
  {
    id: 1,
    name: 'Product Name',
    price: 99.99,
    category: 'Category',
    image: 'image-url',
    description: 'Product description'
  },
  // Add more products...
]
```

### Adding Categories

Edit the `categories` array in `src/App.jsx`:

```javascript
const categories = ['All', 'Electronics', 'Fashion', 'Sports', 'Home', 'YourCategory']
```

### Styling

The project uses Tailwind CSS v4. You can customize styles by:
- Modifying Tailwind classes in the JSX components
- Adding custom CSS in `src/App.css`

## Technologies

- **React 19** - UI framework
- **Vite 8** - Build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **PostCSS** - CSS processing

## Browser Support

Modern browsers with ES6+ support:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
