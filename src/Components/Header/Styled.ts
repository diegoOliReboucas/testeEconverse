import styled from "styled-components";

export const Main = styled.div`
    margin: 0 86px;
    font-family: 'Poppins';
`

export const HeaderTop = styled.div`
display: flex;
justify-content: space-evenly;
line-height: 18px;
font-size: 12px;
color: #9F9F9F;
font-weight: 600;
height: 32px;
    span{
        color: #F71963;
        font-weight: bold;
    }
    div{
        display: flex;
        align-items: center;
        gap: 10px;
    }
`

export const HeaderMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-top: 1px solid #F0F0F0;
    height: 72px;

    input{
        border-radius: 10px;
        height: 48px;
        width: 657px;
        padding: 0 24px;
        border: none;
        background-color: #F7F5F2;
        color: #9F9F9F;
        font-size: 14px;
    }

    div{
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 30px;

        img{
            cursor: pointer;
        }
    }
`

export const Input = styled.div`
    input{
        position: relative;
    }
    img{
        width: 28px;
        height: 28px;
        position: absolute;
        right: 28%;
        top: 8.3%;
        cursor: pointer;
    }
`

export const HeaderBottom = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
color: #9F9F9F;
font-size: 12px;
height: 40px;
box-shadow: 0px 8px 16px rgba(57, 48, 19, 0.12);
border-top: 1px solid #F0F0F0;

p{
    display: flex;
    gap: 10px;
    align-items: center;
    cursor: pointer;
    font-size: 12px;

    &:hover{
        color: #F71963;
    }
}
`