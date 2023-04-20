import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    gap: 10px;
    overflow: hidden;

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
    p{
        font-weight: 700;
        font-size: 15px;
        color: #3F3F40;
        cursor: pointer;
    }
`