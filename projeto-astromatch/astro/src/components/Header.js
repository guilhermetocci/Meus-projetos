import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "./imagens/gift.gif";
import botaomatch from "./imagens/seta.png";

const Logo= styled.img`
width: 70px;
`;
const Container= styled.div`
display: inline-flex;

`;
const BotaoMatch = styled.button`
background-color: #FFFFFF;
border: none;
display: block;
justify-content: center;
img{width: 70px}

`;
const Hr = styled.hr`

border: solid;
border-color:#22B8A8;
color: #22B8A8;

`;
const H1 = styled.h1`
color: #22B8A8;
`;

function Header(props) {
  return (
    <div>
      <Container>
      <H1>Astromatch</H1>
      <Logo src={logo}></Logo>
      </Container>
      <BotaoMatch onClick={props.trocaTela}><img src={botaomatch}></img></BotaoMatch>
      <Hr></Hr>
      
    </div>
  );
}

export default Header;
