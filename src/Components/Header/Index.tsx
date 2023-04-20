import React from "react";
import * as C from './Styled'
import truck from '../../Assets/Truck.png'
import creditCard from '../../Assets/CreditCard.png'
import shieldCheck from '../../Assets/ShieldCheck.png'
import Group35 from '../../Assets/Group35.png'
import Group from '../../Assets/Group.png'
import Heart from '../../Assets/Heart.png'
import UserCircle from '../../Assets/UserCircle.png'
import MagnifyingGlass from '../../Assets/MagnifyingGlass.png'
import ShoppingCart from '../../Assets/ShoppingCart.png'
import CrownSimple from '../../Assets/CrownSimple.png'

export const Header = () => {
    return (
        <C.Main>
            <C.HeaderTop>
                <div>
                    <img src={shieldCheck} alt="shieldCheck"/>
                    <p> Compra <span>100% segura</span></p>
                </div>

                <div>
                    <img src={truck} alt="truck"/>
                    <p><span>Frete grátis</span> acima de R$ 200</p>
                </div>
                
                <div>
                    <img src={creditCard} alt="creditCard"/>
                    <p><span>Parcele </span> suas compras</p>
                </div>
            </C.HeaderTop>

            <C.HeaderMain>
                <img src={Group35} alt="Logo"/>
                <C.Input>
                    <input type="text" placeholder="O que você está buscando?"/>
                    <img src={MagnifyingGlass} alt="Glass" />
                </C.Input>

            <div>
                <img src={Group} alt="Group"/>
                <img src={Heart} alt="Heart"/>
                <img src={UserCircle} alt="UserCircle"/>
                <img src={ShoppingCart} alt="ShoppingCart"/>
            </div>
            </C.HeaderMain>

            <C.HeaderBottom>
                <p>TODAS CATEGORIAS</p>
                <p>SUPERMERCADO</p>
                <p>LIVROS</p>
                <p>MODA</p>
                <p>LANÇAMENTOS</p>
                <p>OFERTAS DO DIA</p>
                <p><img src={CrownSimple} alt="Crown" /> ASSINATURA</p>
            </C.HeaderBottom>
        </C.Main>
    )
}