# Multi-Theme Switcher React Application

A modern React application showcasing dynamic theme switching functionality with multiple pre-configured themes. Built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Three distinct theme options
- 📱 Fully responsive design
- 🔄 Real-time theme switching
- 🛍️ Product showcase with API integration
- 📱 Mobile-friendly navigation
- 🎯 Modern UI components

## Tech Stack

- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router DOM
- React Icons
- Vite

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn (we are using npm)
- Git
- A modern web browser (Chrome, Firefox, Safari, or Edge)

### Step-by-Step Setup Guide

1. **Clone the repository:**
```bash
git clone https://github.com/rehanraza788/multi-theme-switcher
cd multi-theme-switcher
```

2. **Install dependencies:**
```bash
npm install
```

3. **Environment Setup:**
   - Create a `.env` file in the root directory
   - Add the following environment variables:
   ```env
   VITE_API_URL=https://fakestoreapi.com
   ```

4. **Configure Tailwind:**
   - Tailwind CSS is pre-configured
   - You can customize the theme in `tailwind.config.js`
   - Theme variables are in `src/styles/theme.ts`

5. **Start Development Server:**
```bash
npm run dev
```

6. **View the Application:**
   - Open your browser and visit `http://localhost:5173`
   - The app should be running with hot reload enabled

### Development Setup Tips

1. **VS Code Extensions:**
   - Install "Tailwind CSS IntelliSense"
   - Install "ESLint"
   - Install "Prettier"

2. **Code Quality Tools:**
   ```bash
   # Run ESLint
   npm run lint
   
   # Run type checking
   npm run typecheck
   ```

3. **Build for Production:**
   ```bash
   # Create production build
   npm run build
   
   # Preview production build
   npm run preview
   ```

### Troubleshooting Common Issues

1. **Node Version Mismatch:**
   ```bash
   # Check your Node version
   node --version
   
   # Use nvm to switch to correct version if needed
   nvm use 16
   ```

2. **Port Conflicts:**
   - If port 5173 is in use, Vite will automatically try the next available port
   - You can manually specify a port in `vite.config.ts`

3. **Dependencies Issues:**
   ```bash
   # Clear npm cache
   npm cache clean --force
   
   # Remove node_modules and reinstall
   rm -rf node_modules
   npm install
   ```

## Project Structure

```
src/
├── components/        # Reusable UI components
├── context/          # React Context providers
├── pages/            # Page components
├── services/         # API services
├── styles/           # Theme configurations and global styles
└── App.tsx          # Main application component
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Features in Detail

### Theme Switching
- Multiple color schemes
- Custom font families
- Persistent theme selection
- Smooth transitions

### Responsive Design
- Mobile-first approach
- Hamburger menu for mobile
- Adaptive layouts
- Optimized for all screen sizes

### Components
- Header with navigation
- Product cards with animations
- Contact form
- About page
- Footer

## API Integration

The application integrates with the Fake Store API to display product data:
- Product listings
- Product details
- Categories
- Ratings

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
```
