import Page from "../components/Page";
import styled from "styled-components";
import { Container, ContainerA } from "../components/components";

const Image = styled.img`
 position: relative;
  
  height:100%;
  overflow: hidden;
  object-fit: cover;
  background-color: #9D00FF;
  z-index: 1;
  `

const Index = () => (
    <Page>
        <Container>
        <ContainerA>
            <Image src='./static/welcome.png'/>

        </ContainerA>
        <ContainerA>aa</ContainerA>

        </Container>
    </Page>
)
export default Index