# Travel Agency Website - Tailwind CSS Project

A modern, responsive travel agency website built with HTML and Tailwind CSS, showcasing travel packages, destinations, and customer testimonials.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Technologies Used](#technologies-used)
- [Pages](#pages)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## 🌟 Overview

This project is a static website for a travel agency called "Journez" that specializes in organizing tours to various destinations. The website features a modern design with full-screen background images, travel packages, customer testimonials, and a contact form.

## ✨ Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Hero Section**: Eye-catching hero section with background image
- **Travel Packages**: Showcase of three travel packages (Mountains, Ocean, Forest)
- **About Section**: Information about the travel agency
- **Services Section**: List of services offered with icons
- **Statistics Section**: Visual representation of company achievements
- **Testimonials**: Customer reviews with carousel functionality
- **Contact Form**: Email subscription form
- **Modern UI**: Built with Tailwind CSS for a clean, modern look

## 📁 Project Structure

```
/vercel/sandbox/
├── .git/                    # Git repository
├── .gitignore              # Git ignore file
├── index.html              # Main travel agency website
├── index1.html             # Secondary page (NEFMarket)
├── package.json            # Node.js dependencies and scripts
├── package-lock.json       # Locked versions of dependencies
├── tailwind.config.js      # Tailwind CSS configuration
├── node_modules/           # Node.js dependencies (auto-generated)
└── src/
    ├── input.css           # Tailwind CSS input file
    ├── output.css          # Compiled CSS output (auto-generated)
    └── images/             # Image assets
        ├── countries.png
        ├── customer-service.png
        ├── destination.png
        ├── flutter.jpg
        └── tourism.png
```

## 🔧 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code, Sublime Text, etc.)

## 📦 Installation

1. **Clone the repository** (or download the project):
   ```bash
   git clone <repository-url>
   cd /vercel/sandbox
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

   This will install:
   - `@tailwindcss/cli` (v4.1.14)
   - `tailwindcss` (v4.1.14)

## 🚀 Usage

### Development Mode

To run the project in development mode with automatic CSS compilation:

```bash
npm run dev
```

This command will:
- Watch for changes in `src/input.css`
- Automatically compile Tailwind CSS to `src/output.css`
- Keep running until you stop it (Ctrl+C)

### Viewing the Website

1. Start the development server (optional, or just open the HTML file):
   ```bash
   npm run dev
   ```

2. Open `index.html` in your web browser:
   - **Option 1**: Double-click `index.html`
   - **Option 2**: Use a local server (recommended):
     ```bash
     # Using Python 3
     python3 -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```
   - Then navigate to `http://localhost:8000`

## 💻 Development

### Making Changes

1. **HTML Changes**: Edit `index.html` or `index1.html` directly
2. **Styling Changes**: 
   - Add Tailwind utility classes directly in HTML
   - For custom CSS, edit `src/input.css`
   - Run `npm run dev` to watch for changes

### Tailwind CSS Configuration

The `tailwind.config.js` file contains:

```javascript
export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./index.html",
    "./index1.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'flutter': "url('./src/images/flutter.jpg')",
      },
    },
  },
  plugins: [],
}
```

**Key Configuration:**
- `content`: Specifies which files to scan for Tailwind classes
- `theme.extend.backgroundImage`: Custom background image utilities
- `plugins`: Array for Tailwind plugins (currently empty)

### Adding Custom Styles

To add custom styles:

1. Edit `src/input.css`:
   ```css
   @import "tailwindcss";
   
   /* Your custom CSS here */
   .custom-class {
     /* Custom styles */
   }
   ```

2. The styles will be automatically compiled when running `npm run dev`

## 🛠️ Technologies Used

- **HTML5**: Markup structure
- **Tailwind CSS v4.1.14**: Utility-first CSS framework
- **@tailwindcss/cli v4.1.14**: Tailwind CSS command-line tool
- **Node.js**: Development environment
- **npm**: Package manager

## 📄 Pages

### 1. index.html - Main Travel Agency Website

**Sections:**
- **Hero Section**: Full-screen background with "Travel" heading and call-to-action
- **About Section**: "What do You Know About Us" with company information
- **Packages Section**: Three travel packages (Mountains $600, Ocean $700, Forest $800)
- **Services Section**: "What Can We Offer for You" with three key features
- **Statistics Section**: Visual icons showing company metrics
- **Testimonials Section**: Customer reviews with horizontal scroll
- **Contact Section**: Email subscription form
- **Footer**: Links and credits

**Key Features:**
- Full-screen background images
- Responsive grid layouts
- Custom yellow accent color (#FBBF24)
- SVG icons for UI elements
- Horizontal scrolling testimonials

### 2. index1.html - NEFMarket Page

A secondary page featuring:
- Navigation bar with NEFMarket branding
- Login/Signup buttons
- Cyan accent color theme
- Background image integration

## 🎨 Customization

### Changing Colors

The website uses a yellow accent color (`bg-yellow-400`, `bg-yellow-300`). To change:

1. **Using Tailwind utilities**: Replace `yellow` with another color:
   ```html
   <!-- Before -->
   <button class="bg-yellow-400">Button</button>
   
   <!-- After (using blue) -->
   <button class="bg-blue-400">Button</button>
   ```

2. **Custom colors**: Add to `tailwind.config.js`:
   ```javascript
   theme: {
     extend: {
       colors: {
         'brand': '#your-color-hex',
       }
     }
   }
   ```

### Changing Images

1. **Background Images**: Replace URLs in HTML:
   ```html
   <div class="bg-[url('YOUR-IMAGE-URL')]">
   ```

2. **Local Images**: Add images to `src/images/` and reference:
   ```html
   <img src="./src/images/your-image.png" alt="Description">
   ```

### Modifying Content

- **Text**: Edit directly in `index.html`
- **Prices**: Update in the packages section
- **Links**: Modify `href` attributes in anchor tags

## 📝 Scripts

Available npm scripts:

```json
{
  "dev": "npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch",
  "test": "echo \"Error: no test specified\" && exit 1"
}
```

- `npm run dev`: Start development mode with CSS watching
- `npm test`: Currently not configured

## 🤝 Contributing

To contribute to this project:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Commit: `git commit -m "Add your feature"`
5. Push: `git push origin feature/your-feature`
6. Open a Pull Request

## 📜 License

ISC License

## 🔗 Links

- **GitHub Repository**: [https://github.com/zikou058/mini_pro_tailwindcss](https://github.com/zikou058/mini_pro_tailwindcss)
- **Tailwind CSS Documentation**: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)

## 🐛 Troubleshooting

### CSS Not Updating

If your CSS changes aren't appearing:

1. Make sure `npm run dev` is running
2. Check that your HTML file is listed in `tailwind.config.js` content array
3. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
4. Clear browser cache

### Images Not Loading

If images aren't displaying:

1. Check file paths are correct
2. Ensure images exist in `src/images/` directory
3. Verify image file names match exactly (case-sensitive)
4. For external images, check URLs are accessible

### Node Modules Issues

If you encounter dependency issues:

```bash
# Remove node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall dependencies
npm install
```

## 📞 Support

For issues or questions:
- Open an issue on GitHub
- Check Tailwind CSS documentation
- Review the code comments in HTML files

## 🎯 Future Enhancements

Potential improvements:
- Add JavaScript for interactive features
- Implement actual booking functionality
- Add more pages (destinations, about, contact)
- Integrate with a backend API
- Add animations and transitions
- Implement a proper carousel for testimonials
- Add form validation
- Optimize images for web
- Add SEO meta tags
- Implement accessibility features (ARIA labels, keyboard navigation)

---

**Built with ❤️ using Tailwind CSS**
