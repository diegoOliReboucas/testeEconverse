import React from "react";
import * as C from './Styled'
import Rectangle250 from '../../Assets/Rectangle250.png'

export const Banner = () => {
    return (
        <C.Main>
            <h1>Venha conhecer nossas promoções</h1>
            <h2>50% Off nos produtos</h2>
            <button>Ver produto</button>
        </C.Main>
    )
}