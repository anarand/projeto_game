import React from 'react'

const Produtos = ({imagem,titulo,descricao,preco}) => {
  return (
    <article className="produto">
      <img src={imagem} alt={titulo}/>
      <p>{descricao}</p>
      <p className="preco">{preco}</p>
      <button>Comprar</button>
    </article>
  )
}

export default Produtos
