import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import ImageContext from '../../contexts';
import Thumbnail from './Thumbnail';

const mockImageContextValue = {
  tags: 'animals birds',
  user: 'marcus',
  id: '512454',
  toggleFavorite: vi.fn(),
  favorite: false,
};

const addCountMockFn = vi.fn();

vi.mock('./components/overlay', () => ({
  __esModule: true,
  default: () => <div data-testid="overlay" />,
}));

describe('Test Thumbnail', () => {
  afterEach(() => cleanup());
  beforeEach(() => {
    render(
      <ImageContext.Provider value={mockImageContextValue}>
        <Thumbnail
          source="src/assets/fallbbback-picture.jpeg"
          addCount={addCountMockFn}
        />
      </ImageContext.Provider>
    );
  });

  it('should render Thumbnail component', async () => {
    expect(screen.getByTestId('thumbnail')).toBeInTheDocument();
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
    expect(screen.getByTestId('image')).toBeInTheDocument();
  });

  it('should call Overlay on mouseEnter', async () => {
    expect(screen.queryByTestId('overlay')).not.toBeInTheDocument();
    fireEvent.mouseEnter(screen.getByTestId('thumbnail'));
    expect(screen.getByTestId('overlay')).toBeInTheDocument();
    fireEvent.mouseLeave(screen.getByTestId('thumbnail'));
    expect(screen.queryByTestId('overlay')).not.toBeInTheDocument();
  });
});
