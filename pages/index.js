import Page from '../components/Page'
import { Container, ContainerA, Image} from '../components/components'



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
