import { render, screen } from '@testing-library/react';
import Navigation from './index';

test('check if component renders text correctly', () => {
  render(<Navigation />);
  const textElement1 = screen.getByText(/'Use Cases/i);
  const textElement2 = screen.getByText(/'Products/i);
  const textElement3 = screen.getByText(/'Company/i);
  const textElement4 = screen.getByText(/'Support/i);
  const textElement5 = screen.getByText(/'Log In/i);
  const textElement6 = screen.getByText(/'Sign Up/i);

  expect(textElement1).toBeInTheDocument();
  expect(textElement2).toBeInTheDocument();
  expect(textElement3).toBeInTheDocument();
  expect(textElement4).toBeInTheDocument();
  expect(textElement5).toBeInTheDocument();
  expect(textElement6).toBeInTheDocument();
});
