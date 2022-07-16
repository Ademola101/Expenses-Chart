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
    font-family: 'DM Sans', sans-serif;
    background:  hsl(27, 66%, 92%);
    margin: 0;
    letter-spacing: 0.07em;
    width: 100vw;
    @media (max-width:375px) {
  width: 80vw;
}

  }

`

export default GlobalStyle