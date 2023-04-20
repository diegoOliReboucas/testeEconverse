import React from 'react';
import * as C from './Styled'
import { ProdutosLista } from '../produtosLista/Index';

export const ProdutosRelacionados = () =>{
    return (
        <C.Main>
            <h1>Produtos Relacionados</h1>
            <p>Ver todos</p>
            <ProdutosLista />
        </C.Main>
    )
}
