import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html,body,*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
body{
    font-size: 20px;
    font-family: 'League Spartan', sans-serif;
}
`;
export default GlobalStyle;