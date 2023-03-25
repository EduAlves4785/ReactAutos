import styled from "styled-components";

export const FormCadastro=styled.form`
    max-width: 30rem;
    max-height: 100%;
    background-color: RGB(202 202 202);
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;

    & *{
        margin:.5rem;
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

    & span{
        color: RGB(255 92 92);
        animation: tremer .2s;
        animation-iteration-count: 4;
        font-size: 15px;
        font-weight: 300;
    }

    @keyframes tremer {
        0% {margin-left: 0;}
        25% {margin-left: 5px;}
        50% {margin-left: 0;}
        75% {margin-left: -5px;}
        100% {margin-left: 0;}
    }

    & h4{
        max-width: 10rem;
        border-radius: 5px;
        background-color: RGB(111 255 121);
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
`