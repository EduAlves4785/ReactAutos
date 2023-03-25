import styled from "styled-components";

export const NavBar=styled.header`
    width: 100%;
    display: grid;
    height: 5rem;
    grid-template-columns: 1fr 2fr 12fr;
    background-color: transparent;
    align-items: center;
    
    & *{
        margin:.2rem;
    }


    & a{
        text-decoration: none;
        width: 15rem;
        display: flex;
        color:#37306B;
    }

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
`

export const Content=styled.section`
    max-width: 100%;
    background-color: RGB(255 255 255);
    margin: 1rem 1rem;
    max-height:100%;
    padding: 1rem 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const Card=styled.div`
    max-width: 20rem;
    background-color: #66347F;
    color: RGB(233 192 200);
    max-height: 15rem;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin: 1rem 1rem;
    padding: 1rem;
    border-radius: 5px;

    & *{
        margin: .5rem;
    }

    & h4{
        display: flex;
        align-items: center;
    }
`

export const Anuncios=styled.div`
    background-color: purple;
    max-width: 150%;
    max-height: 100%;
`
export const ContainerAnuncios=styled.div`
    background-color: RGB(235 235 235);
    max-width: 100%;
    height: 15rem;
    margin:2rem 0rem;
    padding: 1rem;
    overflow-y: scroll;
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const CardAnuncio=styled.div`
    width:12rem;
    height: 90%;
    text-transform:capitalize;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    flex-direction:column;
    align-items: center;
    margin: 1rem;
    transition: .3s;

    &:hover{
        transition: .3s;
        box-shadow: 0px 0px 26px -4px rgba(0,0,0,0.75);
    }
    
    & *{
        margin-bottom:1em;
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
        height: 2rem;
    }

    & button:hover{
        transition:.3s ease-in;
        opacity: 1;
    }
`