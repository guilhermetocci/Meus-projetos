import React from "react";
import { Router } from "./Routes/Router";
import { createGlobalStyle } from "styled-components";
import GlobalState from "./Components/Global/GlobalState";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  max-width:100vw;
  font-family: 'Noto Sans', sans-serif;
}
body{ 
  height:100vh;
  /* width:100vw; */
  background:#27282c;
  overflow-x:hidden;
}
`

function App() {
  return (
    <GlobalState>
      <GlobalStyle />
      <Router />
    </GlobalState>
  );
}

export default App;
