import React, { useState } from "react";
import Matchs from "./components/Matchs";
import Perfil from "./components/Perfil";
import Header from "./components/Header";
import styled from "styled-components";

const Card = styled.div`
border: 3px solid ;
border-color: #22B8A8;
border-style:double;
border-width:10px;
min-width: 28vw;
min-height:90vh;
@media (max-width: 800px){
  margin: 0;
  min-width: 95vw;
min-height:97vh;

  
}
`;

export default function App() {
  const [tela, setTela] = useState(false);
  let telas;
  function trocaTela() {
    setTela(!tela);
  }

  if (tela) {
    telas = (
      <Card>
        <Header trocaTela={trocaTela} />
        <Matchs />
      </Card>
    );
  } else {
    telas = (
      <Card>
        <Header trocaTela={trocaTela} />
        <Perfil />
      </Card>
    );
  }

  return <div>{telas}</div>;
}
