import React from "react";
import * as C from './Styled'
import Facebook from '../../Assets/facebook.png'
import Instagram from '../../Assets/instagram.png'
import Youtube from '../../Assets/youtube.png'

import sodexo from '../../Assets/sodexo.png'
import alelo from '../../Assets/alelo.png'
import elo from '../../Assets/elo.png'
import ifood from '../../Assets/ifood.png'
import visa from '../../Assets/visa.png'
import dinners from '../../Assets/dinners.png'
import mastercard from '../../Assets/mastercard.png'
import pix from '../../Assets/pix.png'
import amex from '../../Assets/amex.png'
import ticket from '../../Assets/ticket.png'

export const Footer = () => {
    return (
        <C.Main>
            <C.footerLeft>
                <C.sobreNos>
                    <h4>Sobre nós</h4>
                    <ul>
                        <li>CONHEÇA</li>
                        <li>COMO COMPRAR</li>
                        <li>INDICAÇÃO E DESCONTO</li>
                    </ul>
                    <div>
                        <img src={Facebook} alt="Facebook" />
                        <img src={Instagram} alt="Instagram" />
                        <img src={Youtube} alt="Youtube" />
                    </div>
                </C.sobreNos>
                <C.Informacoes>
                <h4>INFORMAÇÕES ÚTEIS</h4>
                <ul>
                        <li>FALE CONOSCO</li>
                        <li>DÚVIDAS</li>
                        <li>PRAZOS DE ENTREGA</li>
                        <li>FORMAS DE PAGAMENTO</li>
                        <li>POLÍTICA DE PRIVACIDADE</li>
                        <li>TROCAS E DEVOLUÇÕES</li>
                </ul>
                </C.Informacoes>
                <C.Pagamento>
                <h4>FORMAS DE PAGAMENTO</h4>

                        <div>
                        <img src={visa} alt="visa" />
                        <img src={elo} alt="elo" />
                        <img src={alelo} alt="alelo" />
                        <img src={dinners} alt="dinners" />
                        <img src={ifood} alt="ifood" />
                        <img src={mastercard} alt="mastercard" />
                        <img src={pix} alt="pix" />
                        <img src={amex} alt="amex" />
                        <img src={ticket} alt="ticket" />
                        <img src={sodexo} alt="sodexo" />
                        </div>

                </C.Pagamento>
            </C.footerLeft>
 
            <C.footerRight>
                <h1>CADASTRE-SE E RECEBA NOSSAS <span>NOVIDADES E PROMOÇÕES</span></h1>
                <p>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>

                <div>
                    <input type="text" placeholder="SEU E-MAIL"/>
                    <button>OK</button>
                </div>
            </C.footerRight>
        </C.Main>
    )
}