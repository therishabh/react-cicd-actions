import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest'
import App from './App';

test('renders Github Actions heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Rishabh Agrawal/i);
  expect(headingElement).toBeInTheDocument();
});

test('contains an h1 element', () => {
  const { container } = render(<App />);
  const h1Element = container.querySelector('h1');
  expect(h1Element).toBeInTheDocument();
});

test('contains an h2 element', () => {
  const { container } = render(<App />);
  const h2Element = container.querySelector('h2');
  expect(h2Element).toBeInTheDocument();
});