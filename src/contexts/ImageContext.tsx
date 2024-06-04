import { createContext } from 'react';

interface ImageContextProps {
  tags: string;
  user: string;
  id: string;
  toggleFavorite: (id: string) => void;
  favorite: boolean;
}

const ImageContext = createContext<ImageContextProps>({
  tags: '',
  user: '',
  id: '',
  toggleFavorite: () => {},
  favorite: false,
});

export default ImageContext;
