import styled from "styled-components";

type propsOpenModal = {
    openModal?: boolean
  }

export const Main = styled.div``

export const Produtos = styled.div`
    display: flex;
    gap: 13px;
    margin: 0 86px;
    width: 1200px;
    overflow-x: scroll;

    ::-webkit-scrollbar{
    width: 5px;
    height: 10px;

}
::-webkit-scrollbar-thumb{
    background-color: #fff;
    border: 2px solid #F71963;
    border-radius: 5px;
}
`

export const Produto = styled.div`
    width: 250px;
    height: 500px;
    box-shadow: 0px 3px 19px rgba(0, 0, 0, 0.22);
    border-radius: 10px;
    padding: 22px 11px;
    margin: 20px 10px;
`

export const produtoInside = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
color: #3F3F40;
    img{
        width: 247px;
        height: 228px;
        margin-bottom: 25px;
    }
    h5{
        color: #808080;
        font-size: 16px;
        font-weight: 400;
        text-decoration-line: line-through;
    }
    h4{
        font-weight: 300;
        font-size: 15px;
        margin-bottom: 25px;
    }
    h3{
        color: #000;
        font-size: 20px;
        font-weight: 700;
    }
    span{
        color: #F71963;
        font-size: 12px;
        margin-top: 10px;
    }
    button{
        height: 44px;
        width: 245px;
        background-color: #F71963;
        border-radius: 4px;
        color: #fff;
        border: none;
        font-weight: 700;
        cursor: pointer;
        align-self: center;
        margin-top: 35px;
    }
`
export const ModalOut = styled.div<propsOpenModal>`
    content: '';
    display: ${props => props.openModal ? 'flex' : 'none'};
    height: 100%;
    width: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, .3);
    left: 0;
    top: 0;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    z-index: 5;
`

export const Modal = styled.div`
background-color: #fff;
width: 770px;
height: 300px;
display: flex;
align-items: center;
justify-content: space-around;
`

export const Close = styled.div`

&:after{
    content: "";
    position: absolute;
    height: 0;
    width: 20px;
    border: 2px solid #707070;
    transform: matrix(0.76, 0.64, -0.76, 0.64, 0, 0);
    top: 200px;
    left: 1000px;
}
&:before{
    content: "";
    position: absolute;
    height: 0;
    width: 20px;
    border: 2px solid #707070;
    transform: matrix(0.76, -0.64, 0.76, 0.64, 0, 0);
    top: 200px;
    left: 1000px;
}
`

export const modalLeft = styled.div``

export const modalRight = styled.div`
    color: #041E50;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: -80px;

    h2{
        font-size: 20px;
        font-weight: 400;
    }
    h3{
        font-weight: 900;
        font-size: 20px;
    }
    p{
        font-size: 10px;
        color: #222;
    }
    span{
        font-size: 12px;
        font-weight: 400;
        cursor: pointer;
    }
`