import styled from "styled-components";
import image101 from '../../Assets/image101.png'

export const Main = styled.div`
        margin: 50px 86px;
        display: flex;
        justify-content: space-between;
`

export const Imagem = styled.div`
    width: 560px;
    height: 280px;
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(${image101});
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    border-radius: 10px;

    h1{
        font-size: 40px;
        color: #fff;
        margin-left: 35px;
    }
    p{
        font-size: 16px;
        color: #fff;
        width: 185px;
        margin-left: 35px;
    }
    button{
        width: 131px;
        height: 48px;
        background-color: #F71963;
        color: #fff;
        font-weight: 900;
        font-size: 16px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        margin-left: 35px;
    }
`