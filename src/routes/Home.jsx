import React from 'react'
import Produtos from "./Produtos"

const Home = ({Dados}) => {
  return (
    <div>
      {Dados.map((produto)=>{
        <Produtos
        key={produto.id}
        imagem={produto.imagem}
        titulo={produto.titulo}
        descricao={produto.descricao}
        preco={produto.preco}
        />
      })}
    </div>
  )
}

export default Home
