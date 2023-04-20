import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    font-size: 16px;
    color: #4E4E4E;
    cursor: pointer;

    &:hover{
        p{
            color: #F71963;
        }
        img{
            color: green;
        }
    }
`

export const iconBox = styled.div`
    width: 128px;
    height: 128px;
    border-radius: 10px;
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.22);
    display: flex;
    align-items: center;
    justify-content: center;
    background: #F4F4F4;

    &:hover{
        background-color: #fff;
    }
`