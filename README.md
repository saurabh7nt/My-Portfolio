# Saurabh's Portfolio

A modern, professional personal portfolio website built with React, showcasing DevOps and Cloud Infrastructure expertise.

## 🚀 Overview

This portfolio website serves as a professional online presence for Saurabh, a DevOps / Cloud Platform Engineer specializing in SAP automation on IBM Cloud. The site features a dark-first design with smooth animations, responsive layouts, and an intuitive user experience.

## ✨ Features

- **Modern Tech Stack**: Built with React 18, Vite, Tailwind CSS, and Framer Motion
- **Dark/Light Theme Toggle**: Seamless theme switching with persistent preferences
- **Smooth Animations**: Page transitions and scroll-triggered animations using Framer Motion
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Interactive Sections**:
  - Hero section with typewriter effect
  - About section with professional bio and stats
  - Skills section with categorized technical expertise
  - Projects showcase with detailed modal views
  - Experience timeline
  - Contact form with validation
- **Accessibility**: Semantic HTML, ARIA labels, and keyboard navigation support
- **Performance Optimized**: Fast loading times with Vite's build optimization

## 🛠️ Tech Stack

- **Framework**: React 18.3.1
- **Build Tool**: Vite 5.1.4
- **Styling**: Tailwind CSS 3.4.1
- **Animations**: Framer Motion 11.0.0
- **Icons**: Lucide React 0.344.0
- **Fonts**: IBM Plex Sans, IBM Plex Mono, Space Grotesk (Google Fonts)

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 🏗️ Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── sections/        # Full page sections
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   └── Contact.jsx
│   ├── data/           # Static data files
│   │   ├── projects.js
│   │   ├── skills.js
│   │   └── experience.js
│   ├── context/        # React context providers
│   │   └── ThemeContext.jsx
│   ├── hooks/          # Custom React hooks
│   │   └── useScrollSpy.js
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Customization Guide

### Update Personal Information

1. **Hero Section**: Edit `src/sections/Hero.jsx`
   - Update name, roles, and tagline
   - Modify CTA button links

2. **About Section**: Edit `src/sections/About.jsx`
   - Update bio paragraphs
   - Modify stats in `src/data/experience.js`

3. **Skills**: Edit `src/data/skills.js`
   - Add/remove skill categories
   - Update individual skills

4. **Projects**: Edit `src/data/projects.js`
   - Add new projects with title, description, tags, and details
   - Update existing project information

5. **Experience**: Edit `src/data/experience.js`
   - Update work experience details
   - Modify highlights and achievements

6. **Contact Information**: Edit `src/sections/Contact.jsx`
   - Update email address
   - Add social media links (GitHub, LinkedIn)
   - Modify location

### Customize Theme Colors

Edit `tailwind.config.js` to change the color palette:

```javascript
colors: {
  background: '#0f1117',    // Main background
  surface: '#1a1d27',       // Card/panel background
  primary: '#0f62fe',       // IBM Blue accent
  secondary: '#42be65',     // Terminal green
  textPrimary: '#f4f4f4',   // Main text
  textSecondary: '#a8b3cf', // Secondary text
  border: '#2a2d3e',        // Border color
}
```

### Add New Sections

1. Create a new component in `src/sections/`
2. Import and add it to `src/App.jsx`
3. Add navigation link in `src/components/Navbar.jsx`

## 📝 Available Scripts

### Development
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Testing
- `npm test` - Run tests in watch mode
- `npm run test:ui` - Run tests with UI interface
- `npm run test:coverage` - Generate test coverage report

### Code Quality
- `npm run lint` - Check code for linting errors
- `npm run lint:fix` - Auto-fix linting issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

### Security Scanning
- `npm run security:sbom` - Generate Software Bill of Materials (SBOM)
- `npm run security:scan` - Scan for vulnerabilities (requires SBOM)
- `npm run security:scan:json` - Generate JSON vulnerability report
- `npm run security:scan:sarif` - Generate SARIF vulnerability report
- `npm run security:full` - Run complete security scan (SBOM + vulnerability scan)

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

### Deploy to Hosting Platforms

**Vercel**:
```bash
npm install -g vercel
vercel
```

**Netlify**:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

**GitHub Pages**:
1. Update `vite.config.js` with base path
2. Run `npm run build`
3. Deploy `dist/` folder to gh-pages branch

## 🎯 Key Features Explained

### Theme Toggle
- Persistent theme preference using localStorage
- Smooth transition between dark and light modes
- System preference detection on first visit

### Typewriter Effect
- Cycles through multiple role titles
- Smooth typing and deleting animations
- Customizable speed and roles array

### Smooth Scroll Navigation
- Navbar links scroll to sections smoothly
- Active section highlighting
- Mobile-friendly hamburger menu

### Project Modal
- Click any project card to view details
- Full project information display
- Smooth modal animations

### Contact Form
- Client-side validation
- Success feedback animation
- Copy email functionality

## 🔒 Security

This project includes comprehensive security scanning using Syft and Grype.

### Security Features

- **SBOM Generation**: Automated Software Bill of Materials creation
- **Vulnerability Scanning**: Regular dependency vulnerability checks
- **GitHub Security Integration**: SARIF reports uploaded to GitHub Security tab
- **Automated Workflows**: Daily security scans via GitHub Actions
- **Dependency Review**: PR-based dependency analysis

### Running Security Scans Locally

**Prerequisites**: Install Syft and Grype
```bash
# macOS
brew install syft grype

# Linux
curl -sSfL https://raw.githubusercontent.com/anchore/syft/main/install.sh | sh -s -- -b /usr/local/bin
curl -sSfL https://raw.githubusercontent.com/anchore/grype/main/install.sh | sh -s -- -b /usr/local/bin
```

**Run Security Scan**:
```bash
# Generate SBOM and scan for vulnerabilities
npm run security:full

# Or run individually
npm run security:sbom    # Generate SBOM
npm run security:scan    # Scan for vulnerabilities
```

**View Reports**:
- Table format: Displayed in terminal
- JSON format: `grype-report.json`
- SARIF format: `grype-report.sarif` (for GitHub Security)

### CI/CD Security Pipeline

The project includes automated security scanning in GitHub Actions:
- **Triggers**: Push, PR, daily schedule, manual dispatch
- **Jobs**: SBOM generation, vulnerability scanning, dependency review
- **Reports**: Uploaded as artifacts and to GitHub Security tab


## 🔧 Troubleshooting

**Port already in use**:
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9
```

**Dependencies issues**:
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build errors**:
```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

## 📄 License

This project is open source and available for personal use.

## 👤 Author

**Saurabh**
- Role: DevOps / Cloud Platform Engineer
- Company: Infobell IT Solutions
- Location: Bengaluru, India

---

Built with React & ❤️ by Saurabh
## 🧪 Testing & CI/CD

This project includes comprehensive testing and CI/CD setup for quality assurance and automated deployments.

### Testing Framework
- **Vitest** - Fast unit test framework
- **React Testing Library** - Component testing utilities
- **Coverage Reports** - V8 coverage provider

### Running Tests
```bash
# Run all tests
npm test

# Run tests with UI
npm run test:ui

# Generate coverage report
npm run test:coverage
```

### CI/CD Pipeline
The project uses GitHub Actions for automated testing and deployment:

1. **Lint Stage** - Code quality checks with ESLint and Prettier
2. **Test Stage** - Run all tests and generate coverage
3. **Build Stage** - Create production build
4. **Deploy Stage** - Auto-deploy to GitHub Pages (main branch only)

See [CI_CD_GUIDE.md](./CI_CD_GUIDE.md) for detailed documentation.

### Code Quality
```bash
# Check linting
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format
```
