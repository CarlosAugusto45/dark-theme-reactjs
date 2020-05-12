import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%
  }

  body {
    background: ${(props) => props.theme.colors.background};
    -webkit-font-smoothing: antialiased;
  }

  body, button, input {
    font: 14px sans-serif; 
  }

`;
