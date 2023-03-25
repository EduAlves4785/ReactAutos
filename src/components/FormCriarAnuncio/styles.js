import styled from "styled-components";

export const Container=styled.div`
    max-width:100%;
    max-height: 100%;
    background-color: rgb(235,235,235);
    align-items: center;
    display: flex;
    flex-direction: column;

    && h4{
        color: RGB(81 121 64);
    }

    & form{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        max-height: 100%;
        max-width: 100%;
    }

    & div{
        margin-bottom: 1rem;
    }

    & span{
        background-color: RGB(255 124 124);
        font-size: 12px;
        font-weight: bold;
    }

    & input{
        outline: none;
        border: none;
        width: 12rem;
        height: 1.5rem;
        margin: .5rem;
        padding: .2rem;
    }

    & button{
        border: none;
        background-color: black;
        color: white;
        opacity: .8;
        padding: .5rem;
        border-radius: 5px;
        cursor: pointer;
        transition:.5s ;
    }

    & button:hover{
        opacity: 1;
    }
`