import { createGlobalStyle } from 'styled-components';

import Normalize from './normalize.styled';

const GlobalStyle = createGlobalStyle`
  ${Normalize}
  
  body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #E7E7E7;
  }
`;

export default GlobalStyle;
