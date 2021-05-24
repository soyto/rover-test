import { render, screen } from '@testing-library/react';
import App from './../App';

test('renders mars app text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Mars App/i);
  expect(linkElement).toBeInTheDocument();
});
