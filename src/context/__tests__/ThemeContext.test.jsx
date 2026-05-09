import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, useTheme } from '../ThemeContext';

// Test component that uses the theme context
const TestComponent = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

describe('ThemeContext', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('provides default dark theme', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme')).toHaveTextContent('dark');
  });

  it('toggles theme from dark to light', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    const toggleButton = screen.getByText('Toggle Theme');
    expect(screen.getByTestId('theme')).toHaveTextContent('dark');

    fireEvent.click(toggleButton);
    expect(screen.getByTestId('theme')).toHaveTextContent('light');
  });

  it('toggles theme from light to dark', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    const toggleButton = screen.getByText('Toggle Theme');

    // Toggle to light
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('theme')).toHaveTextContent('light');

    // Toggle back to dark
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('theme')).toHaveTextContent('dark');
  });

  it('persists theme to localStorage', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    const toggleButton = screen.getByText('Toggle Theme');
    fireEvent.click(toggleButton);

    expect(localStorage.getItem('theme')).toBe('light');
  });

  it('throws error when useTheme is used outside provider', () => {
    // Suppress console.error for this test
    const originalError = console.error;
    console.error = () => {};

    expect(() => {
      render(<TestComponent />);
    }).toThrow('useTheme must be used within ThemeProvider');

    console.error = originalError;
  });
});


