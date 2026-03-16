import { render, screen } from '@testing-library/react';
import App from './App';

test('renders REACT CICD APP', () => {
  render(<App />);
  const linkElement = screen.getByText(/THIS IS REACT CICD APP/i);
  expect(linkElement).toBeInTheDocument();
});
