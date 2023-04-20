import React from "react";
import * as C from './Styled'
import logoBranco from '../../Assets/logoBranco.png'
import econverse from '../../Assets/econverse.png'

export const Copyright = () => {
    return (
        <C.Main>
            <C.copLeft>
                <p>Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.  
                É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</p>
            </C.copLeft>

            <C.copRight>
                <img src={econverse} alt="econverse" />
                <img src={logoBranco} alt="logo Branco" />
            </C.copRight>
        </C.Main>
    )
}