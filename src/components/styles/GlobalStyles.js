import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }

  body {
    font-size: 18px;
    background:  hsl(27, 66%, 92%);
    margin: 0;
    letter-spacing: 0.07em;
  }

`

export default GlobalStyle