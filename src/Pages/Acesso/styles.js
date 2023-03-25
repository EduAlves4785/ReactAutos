import styled from "styled-components";

export const FormContainer=styled.div`
    background-color: white;
    max-width: 40rem;
    height:100% ;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    & .ativado{
        display: flex;
    }

    & .desativado{
        display: none;
    }
`



export const BotaoAlterar=styled.button`
    margin-top: 2rem;
    width: 8rem;
    height: 2rem;
    border: none;
    font-size: 14px;
    cursor: pointer;
    transition: .5s;
    color: white;
    background-color: RGB(85 56 114);

    &:hover{
        box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.75);
    }

`

export const BotaoLogin=styled.button`
    margin-top: 2rem;
    width: 8rem;
    height: 2rem;
    border: none;
    font-size: 14px;
    cursor: pointer;
    transition: .5s;
    color: white;
    background-color:#D27685;

    &:hover{
        box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.75);
    }

`