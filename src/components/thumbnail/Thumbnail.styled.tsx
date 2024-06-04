import styled from 'styled-components';

const StyledContainer = styled.div<{ isLoading: boolean }>`
  max-width: 480px;
  position: relative;
  justify-self: center;
  text-align: center;

  img {
    display: block;
    max-width: 100%;
    aspect-ratio: 1.3;
    border-radius: 4px;
    box-shadow: 5px 5px 5px -3px rgba(0, 0, 0, 0.5);
  }

  #spinner-container {
    display: ${({ isLoading }) => (isLoading ? 'block' : 'none')};
  }

  #image-container {
    display: ${({ isLoading }) => (isLoading ? 'none' : 'block')};
  }
`;

export default StyledContainer;
