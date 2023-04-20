import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    h1{
        color: #F71963;
        font-weight: 700;
        font-size: 30px;
        position: relative;

        &:after{
            content: '';
            border: 1px solid #dedede;
            position: absolute;
            width: 360px;
            margin-left: 30px;
            top: 15px;
        }
        &:before{
            content: '';
            border: 1px solid #dedede;
            position: absolute;
            width: 360px;
            margin-left: -390px;
            top: 15px;
        }
    }

    ul{
        list-style: none;
        display: flex;

        li{
            padding: 12px 58px;
            border: 1px solid #BDBDBD;
            font-size: 16px;

            &:hover{
                color: #F71963;
                cursor: pointer;
            }
        }
    }
`
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