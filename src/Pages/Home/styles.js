import styled from 'styled-components';

export const NavBar=styled.header`
    width: 100%;
    display: grid;
    height: 5rem;
    grid-template-columns:0fr 1fr;
    align-items: center;
    background-color: transparent;
    margin-bottom: 1rem;

    & svg{
        animation:wiggle 2s linear infinite;
        color:  #37306B;
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

export const Sobre=styled.div`
    color: white;
    background: rgb(28,23,59);
    background: linear-gradient(90deg, rgba(28,23,59,1) 0%, rgba(22,22,68,1) 50%, rgba(22,28,77,1) 100%);
    width: 100%;
    max-height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;

    & div{
        padding: 1rem 1rem;
        display: flex;
        flex-direction: column;
        margin: 0;
    }

    & img{
       opacity: .8;
    }
`

export const Content=styled.section`
    width: 100%;
    height:100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const BotaoOfertas=styled.button`
    margin-top: 5rem;
    width: 15rem;
    border: none;
    background-color: rgb(25,23,64);
    height: 3rem;
    border-radius: 5px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    transition:.5s ease-in-out;
    color: white;

    &:hover{
        transition:.5s;
        box-shadow: 0px 0px 8px 5px #553872;
    }
`

export const Categorias=styled.div`
    width: 100%;
    height: 20rem;
    margin-top: 2rem;

    & h1{
        margin: 1rem;
    }

    & div{
        width: 100%;
        display: flex;
        height: 100%;
    }

    & .cardItem{
        width: 12.5rem;
        height: 10rem;
        margin: 1rem 1rem;
        background-color: RGB(85 56 114);
        cursor: pointer;
        filter: grayscale(1);
        transition:.5s ease;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
        border-radius: 8px;
    }

    & .cardItem:hover{
        filter: grayscale(0);
    }
`

export const Footer=styled.footer`
    bottom: 0;
    width:80%;
    height: 8rem;
    padding:.5rem;
    display: flex;
    justify-content: space-around;

    & *{
        margin: 1rem 1rem;
        cursor: pointer;
    } 

`