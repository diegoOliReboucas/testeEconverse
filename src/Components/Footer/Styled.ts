import styled from "styled-components";

export const Main = styled.div`
    color: #fff;
    background-color: #2A2A2A;
    padding: 0 86px;
    margin-top: 150px;
    padding-bottom: 25px;
    border-bottom: 2px solid #fff;
    display: flex;
    justify-content: space-between;

    h2{
        font-size: 13px;
    }
    img{
        cursor: pointer;
    }
`

export const footerLeft = styled.div`
    display: flex;
    padding-top: 50px;
    gap: 70px;

    ul{
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 15px;

        li{
            font-size: 12px;
            cursor: pointer;
        }
    }
`

export const footerRight = styled.div`
    margin-top: 30px;
    width: 380px;
    height: 240px;
    background-color: #fff;
    color: #3F3F40;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    gap: 30px;

    h1{
        font-size: 18px;
        font-weight: 300;
    }
    span{
        font-weight: bold;
    }
    p{
        font-size: 12px;
        width: 250px;
    }
    div{
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: center;

        input{
        height: 45px;
        width: 205px;
        border: 1px solid #2A2A2A;
        padding: 0 25px;
        border-radius: 4px;
        color: #C0C0C0;
    }
    button{
        background-color: #F71963;
        color: #fff;
        border: none;
        border-radius: 4px;
        width: 62px;
        height: 45px;
    }
    }
 
`

export const sobreNos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 35px;

    div{
        display: flex;
        gap: 30px;
        margin-top: 30px;
    }
`

export const Informacoes = styled.div`
    display: flex;
    flex-direction: column;
    gap: 35px;`

export const Pagamento = styled.div`
    display: flex;
    flex-direction: column;
    gap: 35px;

    div{
        display: grid;
        grid-template-columns: 80px 80px 80px;
        gap: 10px;
    }
`