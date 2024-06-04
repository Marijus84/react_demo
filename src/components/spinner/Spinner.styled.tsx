import styled from 'styled-components';

const StyledSpinnerContainer = styled.div`
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  display: grid;
  justify-content: center;
  align-items: stretch;
  max-width: 480px;

  div {
    width: 50px;
    height: 50px;
    border: 5px solid #e7e7e7;
    border-top: 5px solid #000;
    border-radius: 50%;
    animation: spinner 2s linear infinite;
    aspect-ratio: 1.3;
  }
`;

export default StyledSpinnerContainer;
