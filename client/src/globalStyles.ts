import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import LatoFont from './assets/Lato-Bold.ttf';

const GlobalStyles = createGlobalStyle`
  ${normalize}

  html {
    font-size: 16px;
    box-sizing: border-box;
  }

  * {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font-family: Lato;
    transition: all 0.50s linear;
  }

  @font-face {
    font-family: 'Lato';
    src: url(${LatoFont}) format('truetype');
  }
`;

export default GlobalStyles;
