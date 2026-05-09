import { afterEach, beforeEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock localStorage
const localStorageMock = {
  getItem: (key) => localStorageMock[key] || null,
  setItem: (key, value) => {
    localStorageMock[key] = value.toString();
  },
  removeItem: (key) => {
    delete localStorageMock[key];
  },
  clear: () => {
    Object.keys(localStorageMock).forEach((key) => {
      if (key !== 'getItem' && key !== 'setItem' && key !== 'removeItem' && key !== 'clear') {
        delete localStorageMock[key];
      }
    });
  },
};

global.localStorage = localStorageMock;

// Cleanup after each test case
afterEach(() => {
  cleanup();
});

// Reset localStorage before each test
beforeEach(() => {
  localStorageMock.clear();
});

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {}, // deprecated
    removeListener: () => {}, // deprecated
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() {
    return [];
  }
  unobserve() {}
};

// Mock scrollTo
window.scrollTo = () => {};


