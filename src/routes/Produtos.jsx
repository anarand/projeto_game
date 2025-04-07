import React from 'react'
import { ProdutoContainer } from '../styles/ProdutoStyled'

const Produtos = ({imagem,titulo,descricao,preco}) => {
  return (
    <ProdutoContainer>
    <article className="produto">
      <img src={imagem} alt={titulo}/>
      <p>{descricao}</p>
      <p className="preco">{preco}</p>
      <button>Comprar</button>
    </article>
    </ProdutoContainer>
  )
}

export default Produtos
