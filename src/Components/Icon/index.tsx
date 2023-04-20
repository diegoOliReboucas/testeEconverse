import React from "react";
import * as C from './Styled'

type propsIcon = {
    text?: string,
    img?: string,
    textImg?: string
}

export const Icon = ({text, img, textImg}: propsIcon) => {
    return (
        <C.Main>
            <C.iconBox>
                <img src={img} alt={textImg} />
            </C.iconBox>
            <p>{text}</p>
        </C.Main>
    )
}