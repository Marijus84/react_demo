import { useState } from 'react';
import Overlay from './overlay';
import LoadingSpinner from '../spinner';
import StyledThumbnailContainer from './Thumbnail.styled';

interface ThumbnailProps {
  source: string;
  addCount: () => void;
}

const Thumbnail = ({ source, addCount }: ThumbnailProps) => {
  const [isShown, setIsShown] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const handleHover = () => setIsShown((isShown) => !isShown);

  const imageLoaded = () => {
    setIsLoading(false);
    addCount();
  };

  const handleImageLoadError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ): void => {
    setImageError(true);
    event.currentTarget.src = 'src/assets/fallback-picture.jpeg';
    imageLoaded();
  };

  return (
    <StyledThumbnailContainer
      isLoading={isLoading}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      data-testid="thumbnail"
    >
      <div id="spinner-container">
        <LoadingSpinner data-testid="spinner" />
      </div>
      <div id="image-container">
        <img
          data-testid="image"
          src={source}
          alt="Random image from pixabay"
          onLoad={imageLoaded}
          onError={handleImageLoadError}
        />
      </div>
      {isShown && !imageError && <Overlay />}
    </StyledThumbnailContainer>
  );
};

export default Thumbnail;
