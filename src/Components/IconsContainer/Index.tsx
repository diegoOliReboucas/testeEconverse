import React from "react";
import * as C from './Styled'
import { Icon } from "../Icon";
import tabletSmartphone from '../../Assets/tabletSmartphone.png'
import supermercado from '../../Assets/supermercados1.svg'
import whiskey from '../../Assets/whiskey.png'
import ferramentas from '../../Assets/ferramentas.png'
import Saude from '../../Assets/Saude.png'
import corrida from '../../Assets/corrida.png'
import moda from '../../Assets/moda.png'


export const IconsContainer = () => {
    return (
        <C.Main>
            <Icon text="Tecnologia" img={tabletSmartphone} textImg="Tablet e Smartphone"/>
            <Icon text="Supermercado" img={supermercado} textImg="Supermercado"/>
            <Icon text="Bebidas" img={whiskey} textImg="Whiskey"/>
            <Icon text="Ferramentas" img={ferramentas} textImg="Ferramentas"/>
            <Icon text="Saude" img={Saude} textImg="Saúde"/>
            <Icon text="Esportes e Fitness" img={corrida} textImg="Corrida"/>
            <Icon text="Moda" img={moda} textImg="Moda"/>
        </C.Main>
    )
}