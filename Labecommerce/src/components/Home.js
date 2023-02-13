import React from "react";
import styled from "styled-components";
import { ProdutoStyle, DisplayHome, BoxCarrinho, CarrinhoStyle, BoxDescricao, SeuCarrinhoStyle } from "../style-projeto";
import Carrinho from "../img/carrinho.png"
import {CarrinhoIcone, ImagemProduto} from "../style-projeto"


export default class Home extends React.Component {
    state = {
        produtos: this.props.produtosHome,
        produtosCarrinho: [],
        precofinal: 0,
    }

    componentDidUpdate() {
        console.log(this.state.produtosCarrinho)
        this.atualizaHome()
        this.precoFinal()
    }
    atualizaHome() {
        if (this.state.produtos !== this.props.produtosHome) {
            this.setState({ produtos: this.props.produtosHome })
        }
    }
    AdicionarCarrinho(id) {
        const novoCarrinho = this.state.produtosCarrinho
            .concat(this.state.produtos.filter((objeto) => {
                if (objeto.id === id) {
                    return true
                } else { return false }
            })
                .map((objeto) => {
                    return {
                        ...objeto,
                        id: Date.now()
                    }
                })
            )
        this.setState({ produtosCarrinho: novoCarrinho })
    }
    precoFinal() {
        let soma = 0.0001
        let preco = this.state.produtosCarrinho.map((item) => { return item.valor })
        for (let index = 0; index < preco.length; index++) {
            soma += preco[index]

        }

        if (this.state.precofinal !== soma) {
            this.setState({ precofinal: soma })
        }
    }
    removeItem(id) {
        const carrinhoRemovido = this.state.produtosCarrinho
            .filter((objeto) => {
                if (objeto.id !== id) {
                    return true
                } else { return false }
            })
        this.setState({ produtosCarrinho: carrinhoRemovido })
    }
 
    render() {
        const carrinho = this.state.produtosCarrinho.map((item) => {
            return (
                <>
                    <li>
                        <h4>{item.nome}</h4>
                        <p>R${item.valor.toFixed(2)}</p>
                    </li>
                    <button onClick={() => this.removeItem(item.id)}>Remover</button>
                </>
            )
        })
        
        return (
            <CarrinhoStyle>
                <DisplayHome>
                    {this.state.produtos.map((item) => {
                        return (
                            <ProdutoStyle>
                                
                                    <h4>{item.nome}</h4>
                                    <ImagemProduto src={item.img}/>
                                    <p>R${item.valor.toFixed(2)}</p>
                              
                                <button
                                    onClick={() => this.AdicionarCarrinho(item.id)}
                                >Adicionar ao Carrinho <CarrinhoIcone src = {Carrinho} alt = "carrinho"/>
                                </button>
                            </ProdutoStyle>
                        )
                    })
                    }
                </DisplayHome>

                <BoxCarrinho>
                   <h2> Seu Carrinho <SeuCarrinhoStyle src={Carrinho}/></h2>
                    <ul>
                        {carrinho}
                    </ul>
                    <h3>Total: R${this.state.precofinal.toFixed(2)}</h3>
                </BoxCarrinho>
            </CarrinhoStyle>
        );
    }
}