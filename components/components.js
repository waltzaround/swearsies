import styled from "styled-components";



export const Container = styled.div`
margin: 4rem auto;
display: grid;
grid-template-columns: 1fr 1fr;
gap: 1rem;
width: 60rem;
height: 30rem;

`;

export const ContainerA = styled.div`

width: 100%;
height: 100%;
overflow: hidden;

h1 {
    margin-top: 6rem;
    letter-spacing: -4px;
    margin-bottom: 0;
    font-size: 6rem;
}

p {
    margin-top: 1rem;
    font-size: 2rem;
    line-height: 1.5;
}

button {
    padding: 1rem;
    font-size: 1.8rem;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: bold;
    border: 4px solid white;
    border-radius: 6px;
    background-color: white;
    color: #9D00FF;
}



`