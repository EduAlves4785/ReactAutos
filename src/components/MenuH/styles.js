import styled from "styled-components";

export const Content=styled.div`
    width: 15rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: 500;

    & a{
        transition: .5s ease;
        width: 4.5rem;
        align-items: center;
        justify-content: center;
    }

    & a:hover{
        transition: .5s ease;
        color: #D27685;
    }
`