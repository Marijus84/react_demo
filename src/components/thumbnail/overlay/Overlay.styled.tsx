import styled from 'styled-components';

const StyledOverlay = styled.div<{ favorite: boolean }>`
  background-color: ${({ favorite }) =>
    favorite ? 'rgba(57, 159, 36, 0.5)' : 'rgba(0, 0, 0, 0.5)'};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 4px;

  div {
    width: 25%;
    height: 3px;
    border-bottom: 1px solid white;
  }

  button {
    background-color: rgba(0, 0, 0, 0);
    border-radius: 15px;
    border: 0.7px solid white;
    color: white;
    padding: 0.5rem 1.5rem;
    cursor: pointer;
  }

  button:hover {
    background-color: ${({ favorite }) =>
      favorite ? 'rgba(255, 0, 0, 0.5)' : 'rgba(1, 255, 39, 0.5)'};
  }

  p {
    font-style: italic;
    margin-top: 0.5rem;
    text-transform: capitalize;
  }

  h1 {
    margin: 0;
    text-transform: capitalize;
  }
`;

export default StyledOverlay;
