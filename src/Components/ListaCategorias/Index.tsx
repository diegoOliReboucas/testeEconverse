import React from "react";
import * as C from './Styled'

export const ListaCategoria = () => {
    return (
        <C.Main>
            <h1>Produtos Relacionados</h1>

            <ul>
                <li>CELULAR</li>
                <li>ACESSÓRIOS</li>
                <li>TABLETS</li>
                <li>NOTEBOOKS</li>
                <li>TVS</li>
                <li>VER TODOS</li>
            </ul>
        </C.Main>
    )
}