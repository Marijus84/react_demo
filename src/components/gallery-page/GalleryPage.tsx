import { useCallback, useEffect, useRef, useState } from 'react';
import StyledContainer from './GalleryPage.styled';
import ImageContext from '../../contexts';
import { ITEMS_PER_PAGE } from '../../app-constants';
import fetchImages, { ImageData } from '../../api/pixabay-images';
import Thumbnail from '../thumbnail';

const GalleryPage = () => {
  const [images, setImages] = useState<ImageData[]>(
    [] as unknown as ImageData[]
  );
  const [page, setPage] = useState<number>(1);
  const [favorites, setFavorites] = useState<string[]>([]);
  const counter = useRef<number>(0);
  const uniqueImagesCount = useRef<number>(ITEMS_PER_PAGE);

  const increaseLoadingCounter = () => {
    counter.current += 1;
  };

  const onScroll = useCallback(() => {
    if (counter.current < uniqueImagesCount.current) return;

    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
      setPage((oldPage) => oldPage + 1);
    }
  }, []);

  const toggleFavorite = (id: string): void => {
    if (favorites.includes(id)) {
      localStorage.setItem(
        'favorites',
        JSON.stringify([...favorites].filter((item) => item !== id))
      );
      setFavorites((previousFavorites) =>
        [...previousFavorites].filter((item) => item !== id)
      );
    } else {
      localStorage.setItem('favorites', JSON.stringify([...favorites, id]));
      setFavorites((previousFavorites) => [...previousFavorites, id]);
    }
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('favorites') || '[]')) {
      setFavorites(JSON.parse(localStorage.getItem('favorites') || '[]'));
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [images, onScroll]);

  useEffect(() => {
    const fetchData = async () => {
      counter.current = 0;
      const newImages = await fetchImages(page);
      const existingIds = new Set(images.map((item) => item.id));
      const uniqueImagesData = [...newImages].filter(
        (item) => !existingIds.has(item.id)
      );
      uniqueImagesCount.current = uniqueImagesData.length;
      setImages([...images, ...uniqueImagesData]);
    };
    fetchData();
  }, [page]);

  return (
    <StyledContainer data-testid="gallery-page">
      {images.map(({ tags, user, id, largeImageURL }: ImageData) => {
        return (
          <ImageContext.Provider
            value={{
              tags,
              user,
              id,
              favorite: favorites ? favorites?.includes(id.toString()) : false,
              toggleFavorite,
            }}
            key={id}
          >
            <Thumbnail
              key={id}
              source={largeImageURL}
              addCount={increaseLoadingCounter}
            />
          </ImageContext.Provider>
        );
      })}
    </StyledContainer>
  );
};

export default GalleryPage;
