import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../../context/ThemeContext';
import Navbar from '../Navbar';

const renderWithTheme = (component) => {
  return render(<ThemeProvider>{component}</ThemeProvider>);
};

describe('Navbar Component', () => {
  it('renders the logo/name', () => {
    renderWithTheme(<Navbar />);
    expect(screen.getByText('Saurabh')).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    renderWithTheme(<Navbar />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders theme toggle button', () => {
    renderWithTheme(<Navbar />);
    const themeButtons = screen.getAllByLabelText('Toggle theme');
    expect(themeButtons.length).toBeGreaterThan(0);
  });

  it('toggles mobile menu when hamburger is clicked', () => {
    renderWithTheme(<Navbar />);
    const menuButton = screen.getByLabelText('Toggle menu');

    fireEvent.click(menuButton);
    // Mobile menu should be visible after click
    expect(screen.getAllByText('Home').length).toBeGreaterThan(1);
  });

  it('handles navigation link clicks', () => {
    renderWithTheme(<Navbar />);
    const homeLink = screen.getAllByText('Home')[0];

    fireEvent.click(homeLink);
    // Should not throw error
    expect(homeLink).toBeInTheDocument();
  });
});


