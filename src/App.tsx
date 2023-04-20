import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header/Index';
import { Banner } from './Components/Banner/Index';
import { IconsContainer } from './Components/IconsContainer/Index';
import { ProdutosLista } from './Components/produtosLista/Index';
import { DoubleImg } from './Components/DoubleImg/Index';
import { ListaCategoria } from './Components/ListaCategorias/Index';
import { ProdutosRelacionados } from './Components/ProdutosRelacionados/Index';
import { ImagensProdutos } from './Components/imagensProdutos/Index';
import { Navegue } from './Components/Navegue/Index';
import { Footer } from './Components/Footer/Index';
import { Copyright } from './Components/Copyright/Index';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <IconsContainer />
      <ListaCategoria />
      <ProdutosLista />
      <DoubleImg />
      <ProdutosRelacionados />
      <ImagensProdutos />
      <Navegue />
      <ProdutosRelacionados />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
