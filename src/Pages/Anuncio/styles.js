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
    background-color: white;
    height: 30rem;
    display:flex;
    flex-direction: row;
    padding: 1rem 1rem;
`

export const ContainerCarro=styled.div`
    color: black;
    width: 100%;
    height: 28rem;
    text-transform: capitalize;
    display:flex;
    flex-direction: row;
    justify-content: space-around;

    & .anuncio{
        width: 40rem;
        height:25rem;
        padding: 1rem;

        & span{
            color: #D27685; 
        }
    }
`

export const CardAnunciante=styled.div`
    background-color: #D27685;
    width: 27rem;
    max-height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    border-radius: 8px;
    
    & *{
        margin-bottom:1rem;
    }
    
`