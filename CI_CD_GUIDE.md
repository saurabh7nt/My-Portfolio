# CI/CD Guide for Portfolio Project

This guide explains the Continuous Integration and Continuous Deployment (CI/CD) setup for the portfolio project using GitHub Actions.

## 📋 Overview

The CI/CD pipeline automatically runs on every push and pull request to ensure code quality, run tests, and deploy the application.

## 🔧 Pipeline Stages

### 1. **Lint Stage**
- Runs ESLint to check code quality
- Validates code formatting with Prettier
- Ensures consistent code style across the project

**Commands:**
```bash
npm run lint          # Check for linting errors
npm run lint:fix      # Auto-fix linting issues
npm run format:check  # Check code formatting
npm run format        # Auto-format code
```

### 2. **Test Stage**
- Runs all unit tests with Vitest
- Generates code coverage reports
- Uploads coverage to Codecov (optional)

**Commands:**
```bash
npm run test              # Run tests in watch mode
npm run test:ui           # Run tests with UI
npm run test:coverage     # Generate coverage report
```

### 3. **Build Stage**
- Builds the production-ready application
- Optimizes assets and bundles
- Uploads build artifacts

**Commands:**
```bash
npm run build    # Build for production
npm run preview  # Preview production build locally
```

### 4. **Deploy Stage** (Main branch only)
- Automatically deploys to GitHub Pages
- Only runs on successful builds from main branch
- Can be configured for other hosting platforms

## 🚀 GitHub Actions Workflow

The workflow is defined in `.github/workflows/ci.yml` and includes:

```yaml
Triggers:
  - Push to main/develop branches
  - Pull requests to main/develop branches

Jobs:
  1. lint    → Check code quality
  2. test    → Run tests and coverage
  3. build   → Build application
  4. deploy  → Deploy to production (main only)
```

## 📊 Test Coverage

The project uses Vitest for testing with the following setup:

- **Test Framework**: Vitest
- **Testing Library**: React Testing Library
- **Coverage Tool**: V8 (built into Vitest)
- **Coverage Reports**: Text, JSON, HTML

### Running Tests Locally

```bash
# Run all tests
npm test

# Run tests with UI
npm run test:ui

# Generate coverage report
npm run test:coverage

# View coverage report
open coverage/index.html
```

## 🎯 Code Quality Tools

### ESLint Configuration
- **Config File**: `.eslintrc.cjs`
- **Rules**: React best practices, hooks rules
- **Plugins**: react, react-hooks, react-refresh

### Prettier Configuration
- **Config File**: `.prettierrc`
- **Features**: Auto-formatting, Tailwind CSS class sorting
- **Integration**: Works with ESLint via eslint-config-prettier

## 🔐 GitHub Actions Secrets

For deployment, you may need to configure these secrets in your GitHub repository:

1. **GITHUB_TOKEN** - Automatically provided by GitHub Actions
2. **CODECOV_TOKEN** - (Optional) For uploading coverage reports

### Setting up Secrets:
1. Go to your GitHub repository
2. Navigate to Settings → Secrets and variables → Actions
3. Click "New repository secret"
4. Add required secrets

## 📦 Deployment Options

### GitHub Pages (Default)
The workflow is configured to deploy to GitHub Pages automatically.

**Setup:**
1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"
3. Push to main branch to trigger deployment

### Other Platforms

#### Vercel
```bash
npm install -g vercel
vercel --prod
```

#### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

#### Custom Server
```bash
npm run build
# Copy dist/ folder to your server
```

## 🛠️ Local Development Workflow

### Before Committing:
```bash
# 1. Format code
npm run format

# 2. Check linting
npm run lint

# 3. Run tests
npm test

# 4. Build to verify
npm run build
```

### Pre-commit Hook (Optional)
Install Husky for automatic checks:

```bash
npm install --save-dev husky lint-staged
npx husky install
```

Create `.husky/pre-commit`:
```bash
#!/bin/sh
npm run lint
npm test
```

## 📈 Monitoring and Badges

Add status badges to your README.md:

```markdown
![CI/CD](https://github.com/username/portfolio/workflows/CI%2FCD%20Pipeline/badge.svg)
![Tests](https://img.shields.io/badge/tests-passing-brightgreen)
![Coverage](https://codecov.io/gh/username/portfolio/branch/main/graph/badge.svg)
```

## 🐛 Troubleshooting

### Tests Failing Locally
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Vitest cache
rm -rf node_modules/.vitest
```

### Linting Errors
```bash
# Auto-fix most issues
npm run lint:fix
npm run format
```

### Build Failures
```bash
# Check for TypeScript/syntax errors
npm run build

# Verify all dependencies are installed
npm ci
```

## 📚 Best Practices

1. **Always run tests before pushing**
   ```bash
   npm test
   ```

2. **Keep test coverage above 70%**
   ```bash
   npm run test:coverage
   ```

3. **Fix linting errors immediately**
   ```bash
   npm run lint:fix
   ```

4. **Use meaningful commit messages**
   ```
   feat: add new feature
   fix: resolve bug
   test: add test cases
   docs: update documentation
   ```

5. **Create feature branches**
   ```bash
   git checkout -b feature/new-feature
   ```

6. **Review CI/CD results before merging**
   - Check GitHub Actions tab
   - Ensure all checks pass
   - Review coverage reports

## 🔄 Continuous Improvement

### Adding New Tests
1. Create test file: `ComponentName.test.jsx`
2. Write test cases using Vitest and React Testing Library
3. Run tests: `npm test`
4. Check coverage: `npm run test:coverage`

### Updating Workflow
1. Edit `.github/workflows/ci.yml`
2. Test changes on a feature branch
3. Merge after verification

### Performance Optimization
- Monitor build times in GitHub Actions
- Optimize test execution
- Use caching for dependencies

## 📞 Support

For issues or questions:
- Check GitHub Actions logs
- Review test output
- Consult Vitest documentation
- Check ESLint/Prettier configs

---

**Happy Coding! 🚀**