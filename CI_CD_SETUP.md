# CI/CD Pipeline Setup

This project includes a comprehensive CI/CD pipeline using GitHub Actions with best practices for React Native Expo development.

## 🚀 Pipeline Overview

### Main CI Pipeline (`.github/workflows/ci.yml`)

The main CI pipeline runs on every push to `main`/`develop` branches and on pull requests, including:

1. **Lint and Format Check**
   - TypeScript type checking
   - ESLint code quality checks
   - Prettier formatting validation

2. **Unit Tests**
   - Jest test execution with coverage
   - Coverage reports uploaded to Codecov

3. **Security Audit**
   - npm/yarn security vulnerability scanning
   - Moderate level security checks

4. **Build Check**
   - Expo configuration validation
   - App.json validation

5. **E2E Tests** (Optional)
   - End-to-end testing (when configured)

6. **Bundle Analysis** (Optional)
   - Bundle size analysis (when configured)

7. **Performance Tests** (Optional)
   - Performance benchmarking (when configured)

### Pull Request Checks (`.github/workflows/pr-checks.yml`)

Additional checks for pull requests:

1. **Code Quality**
   - TODO/FIXME comment detection
   - Console.log statement detection
   - File size analysis

2. **Dependency Analysis**
   - Outdated dependency checking
   - Unused dependency detection

3. **Bundle Size Check**
   - Bundle size monitoring

4. **Performance Check**
   - Performance regression detection

### Deployment Pipeline (`.github/workflows/deploy.yml`)

Automated deployment triggered by version tags:

1. **Expo Build & Deploy**
   - Android build
   - iOS build
   - Expo publish

2. **GitHub Release**
   - Automatic release creation
   - Release notes generation

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
yarn install
```

### 2. Configure Environment Variables

Add the following secrets to your GitHub repository:

- `EXPO_TOKEN`: Your Expo access token
- `GITHUB_TOKEN`: Automatically provided by GitHub

### 3. Available Scripts

```bash
# Testing
yarn test                    # Run tests in watch mode
yarn test:coverage          # Run tests with coverage
yarn test:e2e              # Run E2E tests (when configured)
yarn test:performance      # Run performance tests (when configured)

# Linting & Formatting
yarn lint                  # Check for linting issues
yarn lint:fix             # Fix auto-fixable linting issues
yarn format               # Format code with Prettier
yarn format:check         # Check code formatting
yarn type-check           # Run TypeScript type checking

# Build & Analysis
yarn bundle:analyze       # Analyze bundle size (when configured)
```

### 4. Local Development

Before committing, run these commands:

```bash
yarn lint
yarn format
yarn type-check
yarn test:coverage
```

## 📋 Code Quality Standards

### ESLint Rules

- **TypeScript**: Strict type checking, no unused variables
- **React**: Hooks rules, JSX best practices
- **React Native**: Platform-specific rules, style guidelines
- **Import**: Organized imports with alphabetical sorting
- **General**: No console.log, proper semicolons, single quotes

### Prettier Configuration

- **Print Width**: 80 characters
- **Tab Width**: 2 spaces
- **Quotes**: Single quotes
- **Semicolons**: Always
- **Trailing Commas**: ES5

### Testing Standards

- **Coverage**: Minimum 80% coverage required
- **Test Files**: Must end with `.spec.tsx` or `.test.tsx`
- **Mocking**: Proper mocking of external dependencies
- **Assertions**: Clear and descriptive test assertions

## 🔧 Configuration Files

### ESLint (`.eslintrc.js`)

Comprehensive linting rules for React Native TypeScript development.

### Prettier (`.prettierrc`)

Code formatting configuration for consistent code style.

### Jest (`jest.config.js`)

Test configuration with coverage reporting and proper module mapping.

### TypeScript (`tsconfig.json`)

Strict TypeScript configuration with React Native support.

## 🚨 Common Issues & Solutions

### 1. ESLint Errors

```bash
# Fix auto-fixable issues
yarn lint:fix

# Check specific files
yarn lint src/components/Button/
```

### 2. Prettier Formatting Issues

```bash
# Format all files
yarn format

# Check formatting
yarn format:check
```

### 3. TypeScript Errors

```bash
# Check types
yarn type-check

# Common fixes:
# - Add proper type annotations
# - Import missing types
# - Fix interface definitions
```

### 4. Test Failures

```bash
# Run tests with verbose output
yarn test --verbose

# Run specific test file
yarn test src/components/Button/index.spec.tsx

# Common fixes:
# - Update test expectations
# - Fix mock implementations
# - Add missing test cases
```

## 📊 Monitoring & Metrics

### Code Coverage

- Coverage reports are automatically generated
- Minimum 80% coverage required
- Reports available in GitHub Actions artifacts

### Bundle Size

- Bundle size monitoring (when configured)
- Size regression detection
- Optimization recommendations

### Performance

- Performance regression detection
- Lighthouse scores (when configured)
- Core Web Vitals monitoring

## 🔄 Workflow Triggers

### Automatic Triggers

- **Push to main/develop**: Full CI pipeline
- **Pull Request**: CI + PR-specific checks
- **Version Tag**: Deployment pipeline

### Manual Triggers

- **Workflow Dispatch**: Manual pipeline execution
- **Repository Dispatch**: External trigger support

## 📝 Best Practices

### 1. Commit Messages

Use conventional commit format:

```
feat: add new button component
fix: resolve navigation issue
docs: update README
test: add unit tests for Button component
```

### 2. Branch Naming

```
feature/user-authentication
bugfix/navigation-crash
hotfix/security-patch
```

### 3. Pull Request Process

1. Create feature branch
2. Make changes with tests
3. Run local checks
4. Create PR with description
5. Address review feedback
6. Merge when approved

### 4. Release Process

1. Create version tag: `git tag v1.0.0`
2. Push tag: `git push origin v1.0.0`
3. Deployment pipeline runs automatically
4. GitHub release created automatically

## 🔒 Security Considerations

- **Dependency Scanning**: Automatic vulnerability detection
- **Secret Management**: Secure handling of API keys
- **Access Control**: Proper permission management
- **Code Review**: Required for all changes

## 📈 Performance Optimization

- **Bundle Analysis**: Regular size monitoring
- **Lazy Loading**: Component and route lazy loading
- **Image Optimization**: Proper image sizing and formats
- **Caching**: Effective caching strategies

## 🆘 Support

For issues with the CI/CD pipeline:

1. Check GitHub Actions logs
2. Review configuration files
3. Consult this documentation
4. Create an issue with detailed information

## 🔄 Updates & Maintenance

### Regular Maintenance Tasks

- Update dependencies monthly
- Review and update ESLint rules
- Monitor pipeline performance
- Update documentation

### Pipeline Improvements

- Add new quality checks as needed
- Optimize build times
- Enhance security scanning
- Improve test coverage
