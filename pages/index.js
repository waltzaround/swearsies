import Page from '../components/Page'
import styled from 'styled-components'
import { Container, ContainerA } from '../components/components'

const Image = styled.img`
  position: relative;

  height: 100%;
  overflow: hidden;
  object-fit: cover;
  background-color: #9d00ff;
  z-index: 1;
`

const Index = () => (
  <Page>
    <Container>
      <ContainerA>
        <Image src='./static/welcome.png' />
      </ContainerA>
      <ContainerA>
        <h1>Swearsies
        </h1>
        <p>Swearsies is a digital swear jar for your google home.</p>
        <button>Get Started</button>
      </ContainerA>
    </Container>
  </Page>
)
export default Index
