import styled from "styled-components";



export const Contain = styled.div`
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

`

export const Image = styled.img`
  position: relative;

  height: 100%;
  overflow: hidden;
  object-fit: cover;
  background-color: #9d00ff;
  z-index: 1;
`