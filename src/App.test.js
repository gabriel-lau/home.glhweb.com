import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './header/header';
import Body1 from './body1/body1';

/* HEADER TEST */

test('renders Header', () => {
  render(<Header />);
  const linkElement = screen.getByText(/portfolio.glhweb.com/i);
  expect(linkElement).toBeInTheDocument();
});

/* BODY1 TEST */
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/WORK IN PROGRESS/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Body1', () => {
  render(<Body1 />);
  const linkElement = screen.getByText(/Body1 Test/i);
  expect(linkElement).toBeInTheDocument();
});