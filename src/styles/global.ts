import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

 ${({ theme }) => css`
   html {
     font-size: 62.5%;
   }

   body {
     color: ${theme.colors.white};
     font-family: ${theme.font.family};
     background: ${theme.colors.background};
   }

   button {
     cursor: pointer;
   }

   a {
     color: inherit;
     text-decoration: none;
   }
 `}
`;

export default GlobalStyles;
