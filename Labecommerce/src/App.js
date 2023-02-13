import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import Filtro from './components/Filtro';
import listaDeProdutos from './components/Produtos/Produtos';
import { FooterStyle, HeaderStyle, IconesRedes } from './style-projeto';
import logoIcon from './img/logo-icon.png';
import Facebook from './img/img-fb.png';
import YouTube from './img/img-yt.png';
import Instagram from './img/img-ig.png';


export default class App extends React.Component {
  state = {
    produtos: listaDeProdutos
  }

  render() {
    console.log(this.state.produtos)
    return (

      <div>
        <HeaderStyle>
          <img src={logoIcon} alt="Logotipo do site" />
          <h1>Book Space</h1>
        </HeaderStyle>



        <Filtro produtos={this.state.produtos} />



        <FooterStyle>
          <div>
              <ol>
                  <li><h5>Endereço:</h5></li>
                  <li>Rua dos Alfeneiros nº 4</li>
                  <li>Londrina</li>
                  <li>Email: bookspace@space.un</li>
                  <li>Caixa Postal: 0800800</li>
              </ol>
          </div>
          <div>
              <ul>
                <li><h5> Perguntas Frequentes: </h5></li>
                <li>Como rastrear minha entrega?</li>
                <li>Quando meu produto vai chegar?</li>
                <li>Aonde meu produto vai chegar?</li>
                <li>...</li>
              </ul>
          </div>
          <div>
            <h5>Nossas redes sociais:</h5>
          <IconesRedes>
            <img src={Facebook} alt="Facebook" href="a" />
            <img src={Instagram} alt="Instagram" href="a" />
            <img src={YouTube} alt="YouTube" href="a" />
          </IconesRedes>
          </div>
        </FooterStyle>

      </div>
    );
  }
}
