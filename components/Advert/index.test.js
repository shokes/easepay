import { render, screen } from '@testing-library/react';
import Advert from './index';

test('check if component renders text correctly', () => {
  render(<Advert />);
  const textElement = screen.getByText(/Earn up to $200 for getting started/i);
  expect(textElement).toBeInTheDocument();
});
