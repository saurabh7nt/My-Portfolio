import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../context/ThemeContext';
import App from '../App';

describe('App Component', () => {
  it('renders without crashing', () => {
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    );
    
    // Check if main sections are rendered
    expect(screen.getAllByText('Saurabh').length).toBeGreaterThan(0);
  });

  it('renders all main sections', () => {
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    );
    
    // Check for section headings
    expect(screen.getByText(/DevOps Engineer/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /About Me/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Technical Skills/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Featured Projects/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Work Experience/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Let's Connect/i })).toBeInTheDocument();
  });

  it('renders navbar and footer', () => {
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    );

    // Navbar
    expect(screen.getByText('Home')).toBeInTheDocument();

    // Footer
    expect(screen.getByText(/© 2026 Saurabh/i)).toBeInTheDocument();
  });
});


