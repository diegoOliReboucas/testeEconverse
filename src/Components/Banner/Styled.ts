import styled from "styled-components";
import Rectangle250 from '../../Assets/Rectangle250.png'

export const Main = styled.div`
    padding: 0 86px;
    display: flex;
    flex-direction: column;
    height: 390px;
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(${Rectangle250});
    color: #fff;
    font-weight: 600;

    h1{
        font-size: 48px;
        width: 600px;
        line-height: 62px;
        margin-top: 50px;
    }
    h2{
        font-size: 36px;
        margin-top: 10px;
    }
    button{
        background-color: #F71963;
        width: 227px;
        height: 60px;
        border: none;
        border-radius: 5px;
        color: #fff;
        font-size: 18px;
        margin-top: 40px;
        cursor: pointer;
    }
`