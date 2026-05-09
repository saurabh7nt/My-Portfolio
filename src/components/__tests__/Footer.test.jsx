import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer Component', () => {
  it('renders copyright text', () => {
    render(<Footer />);
    expect(screen.getByText(/© 2026 Saurabh/i)).toBeInTheDocument();
  });

  it('renders back to top button', () => {
    render(<Footer />);
    expect(screen.getByText('Back to Top')).toBeInTheDocument();
  });

  it('renders location info', () => {
    render(<Footer />);
    expect(screen.getByText(/Bengaluru, India/i)).toBeInTheDocument();
  });

  it('calls scrollTo when back to top button is clicked', () => {
    const scrollToMock = vi.fn();
    window.scrollTo = scrollToMock;

    render(<Footer />);
    const backToTopButton = screen.getByText('Back to Top');

    fireEvent.click(backToTopButton);
    expect(scrollToMock).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
});


