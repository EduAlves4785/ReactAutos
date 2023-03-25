import styled from "styled-components";

export const NavBar=styled.header`
    width: 100%;
    display: grid;
    height: 5rem;
    grid-template-columns:1.2fr 1fr 15fr;
    align-items: center;
    background-color: transparent;
    margin-bottom: 1rem;

    & svg{
        animation:wiggle 2s linear infinite;
        color: #37306B;
    }

    /* Keyframes */
    @keyframes wiggle {
        0%, 7% {
            transform: rotateZ(0);
        }
        15% {
        transform: rotateZ(-15deg);
        }
        20% {
            transform: rotateZ(10deg);
        }
        25% {
            transform: rotateZ(-10deg);
        }
        30% {
            transform: rotateZ(6deg);
        }
        35% {
            transform: rotateZ(-4deg);
        }
        40%, 100% {
            transform: rotateZ(0);
        }
    }


    *{
        margin:.2rem;
    }

    & a{
        text-decoration: none;
        width: 15rem;
        display: flex;
        color: #37306B;
    }
`

export const Content=styled.section`
    width: 100%;
    height: 50rem;
    padding-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 3fr;
`

export const ContainerAnuncios=styled.section`
    width: 90%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding:.5rem ;

    & div{
        width: 15rem;
        height: 25rem;
        background-color:white;
        box-shadow: 0px 0px 9px -1px rgba(0,0,0,0.75);
        border-radius: 8px;
        margin: 1rem;
        text-transform:capitalize;
        display: flex;
        flex-direction: column;
        align-items: center;

        & *{
            margin-bottom: .8rem;
        }

        & img{
            border-radius: 8px 8px 0px 0px;
        }

        & button{
            padding:.2rem ;
            cursor: pointer;
            background-color: RGB(85 56 114);
            color: white;
            border: none;
            opacity: .8;
            transition:.3s ease-in-out;
            border-radius: 8px;
            width: 10rem;
            height: 3rem;
        }

        & button:hover{
            transition:.3s ease-in;
            opacity: 1;
        }
    }
`

export const Filtro=styled.div`
    width: 17rem;
    height: 25rem;
    background-color: white;
    padding: 1rem;
    overflow-x: auto;
    font-weight: bold;

    & *{
        margin: 1rem;
    }

    & input{
        width: 12rem;
        height: 2rem;
        border: .5px solid black;
        border-radius: 5px;
        padding: .2rem;
    }

    & button{
        width: 7rem;
        height: 2rem;
        border: none;
        cursor: pointer;
        border-radius: 8px;
        transition:.3s;
        background-color: RGB(85 56 114);
        color: white;
        font-weight: bold;
    }

    & button:hover{
        width: 9rem;
        height: 2.5rem;
    }
`
