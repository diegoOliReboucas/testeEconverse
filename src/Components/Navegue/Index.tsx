import React from "react";
import * as C from './Styled'
import { Circle } from "../Circle/Index";

export const Navegue = () => {
    return (
        <C.Main>
            <p>Navegue por marcas</p>

            <C.circleContainer>
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
            </C.circleContainer>
        </C.Main>
    )
}