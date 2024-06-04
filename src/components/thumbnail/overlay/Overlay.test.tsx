import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import ImageContext from '../../../contexts';
import Overlay from './Overlay';

const mockImageContextValue = {
  tags: 'first second',
  user: 'marcus',
  id: '512454',
  toggleFavorite: vi.fn(),
  favorite: false,
};

describe('Test Overlay', () => {
  afterEach(() => cleanup());
  beforeEach(() => {
    render(
      <ImageContext.Provider value={mockImageContextValue}>
        <Overlay />
      </ImageContext.Provider>
    );
  });

  it('should render Overlay component ', () => {
    expect(screen.getByTestId('overlay')).toBeInTheDocument();
  });

  it('Overlay should have data form ImageContext', () => {
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      mockImageContextValue.tags.split(',')[0]
    );
    expect(
      screen.getByText(mockImageContextValue.user.replace('_', ' '))
    ).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('Favorite');
  });

  it('Overlay button should call toggleFavorite function', () => {
    fireEvent.click(screen.getByRole('button'));
    expect(mockImageContextValue.toggleFavorite).toHaveBeenCalled();
  });
});
