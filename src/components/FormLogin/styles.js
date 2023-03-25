import styled from "styled-components";

export const FormLogin=styled.form`
    width: 15rem;
    max-height: 15rem;
    background-color: RGB(202 202 202);
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;

    & span{
        color: RGB(255 59 59);
    }

    & *{
        margin:.4rem;
    }

    & input{
        border: none;
        height: 2rem;
        width: 13rem;
        font-size: 13px;
    }

    & button{
        width: 6rem;
        height: 2rem;
        border: none;
        font-size: 17px;
        cursor: pointer;
        transition: .5s;
    }

    & button:hover{
        box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.75);
    }

    & .ErroDiv{
        background-color: RGB(255 102 102);
        border-radius: 5px;
        max-width: 10rem;
        max-height: 10rem;
        justify-content: center;
        align-items: center;
        display:flex;
    }
`