import { ITEMS_PER_PAGE, PIXABY_API_KEY } from '../../app-constants';
import { ImageData } from './pixabay-images-types';

const fetchImages = async (page: number) => {
  const response = await fetch(
    `https://pixabay.com/api/?${new URLSearchParams({
      key: PIXABY_API_KEY,
      page: page.toString(),
      per_page: ITEMS_PER_PAGE.toString(),
    })}`
  );

  const { hits } = await response.json();
  const imageData: ImageData[] = hits.map(
    ({ id, largeImageURL, user, tags }: ImageData) => {
      return {
        id,
        largeImageURL,
        user,
        tags,
      };
    }
  );
  return imageData as ImageData[];
};

export default fetchImages;
