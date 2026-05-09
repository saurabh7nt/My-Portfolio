# Testing Guide

## 📋 Test Structure

```
src/
├── __tests__/              # App-level tests
│   └── App.test.jsx
├── components/
│   └── __tests__/          # Component tests
│       ├── Navbar.test.jsx
│       └── Footer.test.jsx
├── context/
│   └── __tests__/          # Context tests
│       └── ThemeContext.test.jsx
└── test/
    └── setup.js            # Test configuration
```

## 🧪 Writing Tests

### Component Test Example

```jsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MyComponent from '../MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
```

### Testing with Context

```jsx
import { ThemeProvider } from '../../context/ThemeContext';

const renderWithTheme = (component) => {
  return render(<ThemeProvider>{component}</ThemeProvider>);
};

it('renders with theme', () => {
  renderWithTheme(<MyComponent />);
  // assertions...
});
```

## 🎯 Test Coverage Goals

- **Overall Coverage**: > 70%
- **Components**: > 80%
- **Utilities**: > 90%
- **Critical Paths**: 100%

## 📊 Running Tests

### Watch Mode (Development)
```bash
npm test
```
- Automatically reruns tests on file changes
- Shows only failed tests after first run
- Press 'a' to run all tests
- Press 'f' to run only failed tests

### UI Mode
```bash
npm run test:ui
```
- Visual test runner interface
- View test results in browser
- Inspect component renders
- Debug test failures

### Coverage Report
```bash
npm run test:coverage
```
- Generates HTML coverage report
- View in `coverage/index.html`
- Shows line, branch, and function coverage

## 🔍 Debugging Tests

### Using console.log
```jsx
import { screen, debug } from '@testing-library/react';

it('debugs component', () => {
  render(<MyComponent />);
  debug(); // Prints DOM to console
});
```

### Using screen.debug()
```jsx
screen.debug(screen.getByRole('button'));
```

### Vitest UI Debugger
```bash
npm run test:ui
```
Then click on any test to see detailed output.

## ✅ Best Practices

### 1. Test User Behavior, Not Implementation
```jsx
// ❌ Bad - Testing implementation
expect(component.state.count).toBe(1);

// ✅ Good - Testing behavior
expect(screen.getByText('Count: 1')).toBeInTheDocument();
```

### 2. Use Accessible Queries
```jsx
// ✅ Preferred order
screen.getByRole('button', { name: /submit/i })
screen.getByLabelText(/username/i)
screen.getByPlaceholderText(/enter email/i)
screen.getByText(/welcome/i)

// ❌ Avoid
screen.getByTestId('submit-button')
```

### 3. Test Edge Cases
```jsx
describe('Form validation', () => {
  it('handles empty input', () => { /* ... */ });
  it('handles invalid email', () => { /* ... */ });
  it('handles special characters', () => { /* ... */ });
  it('handles max length', () => { /* ... */ });
});
```

### 4. Keep Tests Isolated
```jsx
// ✅ Good - Each test is independent
describe('Counter', () => {
  it('increments', () => {
    render(<Counter />);
    // test increment
  });
  
  it('decrements', () => {
    render(<Counter />);
    // test decrement
  });
});
```

### 5. Use beforeEach for Setup
```jsx
describe('MyComponent', () => {
  beforeEach(() => {
    localStorage.clear();
    // other setup
  });
  
  it('test 1', () => { /* ... */ });
  it('test 2', () => { /* ... */ });
});
```

## 🚨 Common Issues

### Issue: "Cannot find module"
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: Tests timeout
```jsx
// Increase timeout for specific test
it('slow test', async () => {
  // test code
}, 10000); // 10 second timeout
```

### Issue: Async tests failing
```jsx
// Use waitFor for async operations
import { waitFor } from '@testing-library/react';

it('loads data', async () => {
  render(<MyComponent />);
  await waitFor(() => {
    expect(screen.getByText('Loaded')).toBeInTheDocument();
  });
});
```

## 📚 Testing Checklist

Before committing:
- [ ] All tests pass
- [ ] Coverage meets minimum threshold
- [ ] No console errors or warnings
- [ ] Tests are meaningful and clear
- [ ] Edge cases are covered
- [ ] Async operations are properly tested

## 🔗 Resources

- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/react)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
- [Jest DOM Matchers](https://github.com/testing-library/jest-dom)

## 💡 Tips

1. **Write tests first** (TDD approach)
2. **Test one thing at a time**
3. **Use descriptive test names**
4. **Mock external dependencies**
5. **Keep tests simple and readable**
6. **Run tests before committing**
7. **Review coverage reports regularly**

---

Happy Testing! 🧪