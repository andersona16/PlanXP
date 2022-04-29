import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: 'Montserrat';
        color: #ffffff;
    }
    body{
        background-color: #1e1e1e;
    }
`

export default GlobalStyle

