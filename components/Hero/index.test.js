import { render, screen } from '@testing-library/react';
import Hero from './index';

test('check if component renders text correctly', () => {
  render(<Hero />);
  const textElement1 = screen.getByText(/Business banking with/i);

  const textElement2 = screen.getByText(/Zero fees/i);

  const textElement3 = screen.getByText(
    /Thousands of entrepreneurs bank on Winden to start or grow their business./i
  );

  const textElement4 = screen.getByText(/Open an account in under 3 minutes./i);

  const button = screen.getByRole('button', { name: 'Get started' });

  expect(textElement1).toBeInTheDocument();
  expect(textElement2).toBeInTheDocument();
  expect(textElement3).toBeInTheDocument();
  expect(textElement4).toBeInTheDocument();
});
