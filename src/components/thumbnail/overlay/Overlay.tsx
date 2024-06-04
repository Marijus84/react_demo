import { useContext } from 'react';
import StyledOverlay from './Overlay.styled';
import ImageContext from '../../../contexts';

const Overlay = () => {
  const { tags, user, id, toggleFavorite, favorite } = useContext(ImageContext);

  const displayData = {
    title: tags.split(',')[0],
    user: user.replace('_', ' '),
  };

  return (
    <StyledOverlay favorite={favorite} data-testid="overlay">
      <h1>{displayData.title}</h1>
      <div />
      <p>{displayData.user}</p>
      <button
        type="button"
        id={id}
        onClick={() => toggleFavorite(id.toString())}
      >
        {favorite ? 'Forget' : 'Favorite'}
      </button>
    </StyledOverlay>
  );
};

export default Overlay;
