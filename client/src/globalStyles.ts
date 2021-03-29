import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

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
  }

  h1, h2, h3 {
    font-weight: 600;
  }

  h1 {
    font-size: ${({ theme }) => theme.pxToRem(48)};
    line-height: ${({ theme }) => theme.pxToRem(52)};
  }

  h2 {
    font-size: ${({ theme }) => theme.pxToRem(36)};
    line-height: ${({ theme }) => theme.pxToRem(40)};
  }

  h3 {
    font-size: ${({ theme }) => theme.pxToRem(24)};
    line-height: ${({ theme }) => theme.pxToRem(28)};
  }
`;

export default GlobalStyles;
