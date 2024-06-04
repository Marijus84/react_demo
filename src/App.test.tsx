import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import App from './App';

vi.mock('./components/gallery-page', () => ({
  __esModule: true,
  default: () => <div data-testid="gallery-page" />,
}));

describe('Should render App component with child', () => {
  it('Render ', () => {
    render(<App />);
    expect(screen.getByTestId('gallery-page')).toBeInTheDocument();
  });
});
