import React from "react";
import * as C from './Styled'

export const ProdutosLista = () => {
    const [openModal, setOpenModal] = React.useState(false)
    const [produtosLista, setProdutosLista] = React.useState([{
        descriptionShort: '',
        photo: '',
        price: 0,
        productName: '',
        productDesc: ''
    }])
    const [modalNome, setModalNome] = React.useState('')
    const [modalPreco, setModalPreco] = React.useState(0)
    const [modalDesc, setModalDesc] = React.useState('')
    const [modalImg, setModalImg] = React.useState('')

        const produtos = fetch(
            `https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json`
          ).then((r) => r.json()).then((body) => {
            setProdutosLista(body.products) 
          })

          const handleClick = (e: any) =>{
            setOpenModal(true)

            console.log(e.currentTarget.children[0].getAttribute('src'));
            
            
            setModalImg(e.currentTarget.children[0].getAttribute('src'))
            setModalNome(e.currentTarget.children[1].innerHTML)
            setModalPreco(e.currentTarget.children[3].innerHTML)
            setModalDesc(e.currentTarget.children[5].innerHTML)
          }

    return (
        <C.Main>
            <C.ModalOut openModal={openModal}>
                <C.Modal>
                    <C.modalLeft>
                        <img src={modalImg} alt="Imagem do Produto" />
                    </C.modalLeft>
                    <C.modalRight>
                        <h2>{modalNome}</h2>
                        <h3>{modalPreco}</h3>
                        <p>{modalDesc}</p>
                        <span>{`Veja mais detalhes do produto >`}</span>
                    </C.modalRight>
                    <C.Close onClick={() => setOpenModal(false)}></C.Close>
                </C.Modal>
            </C.ModalOut>
            <C.Produtos>
                {produtosLista.map((item) => (
                    <C.Produto>
                        <C.produtoInside onClick={handleClick}>
                            <img src={item.photo} alt="item photo" />
                            <h4>{item.productName}</h4>
                            <h5>R$ {item.price.toLocaleString('pt-BR')}</h5>
                            <h3>R$ {(item.price - item.price*10/100).toLocaleString('pt-BR')}</h3>
                            <p>ou 2x de R$ {(+item.price/2).toLocaleString('pt-BR')} sem juros</p>
                            <p style={{display: 'none'}}>{item.descriptionShort}</p>
                            <span>Frete grátis</span>
                            <button>COMPRAR</button>
                        </C.produtoInside>
                    </C.Produto>
                ))}
            </C.Produtos>
        </C.Main>
    )
}