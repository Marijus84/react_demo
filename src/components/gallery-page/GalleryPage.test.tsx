import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { Mock, vi } from 'vitest';
import GalleryPage from './GalleryPage';

vi.mock('./components/thumbnail', () => ({
  __esModule: true,
  default: () => <div data-testid="thumbnail" />,
}));

const mockResponseData = {
  hits: [
    {
      id: 'testId',
      largeImageURL: 'src/assets/fallback-picture.jpeg',
      user: 'Mads Mikkelsen',
      tags: 'animals',
    },
    {
      id: 'testId2',
      largeImageURL: 'src/assets/fallback-picture.jpeg',
      user: 'Iam Testesson',
      tags: 'birds',
    },
  ],
};

beforeAll(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockResponseData),
    })
  ) as Mock;
});

describe('Test Gallery page', () => {
  afterEach(() => cleanup());
  beforeEach(() => {
    render(<GalleryPage />);
  });

  it('should render Gallery page component', () => {
    expect(screen.getByTestId('gallery-page')).toBeInTheDocument();
  });

  it('should render thumbnail in Gallery page component', async () => {
    await waitFor(() =>
      expect(screen.getAllByTestId('thumbnail')[0]).toBeInTheDocument()
    );
  });

  it('should render same amount of thumbnails as array length of data received ', async () => {
    await waitFor(() => {
      const thumbnails = screen.getAllByTestId('thumbnail');
      expect(thumbnails.length).toBe(2);
    });
  });
});
