import Page from '../components/Page'
import { Contain, ContainerA, Image } from '../components/components'
import Link from 'next/link';

const Index = () => (
  <Page>
    <Contain>
      <ContainerA>
        <Image src='./static/welcome.png' />
      </ContainerA>
      <ContainerA>
        <h1>Swearsies</h1>
        <p>Swearsies is a digital swear jar for your google home.</p>
        <Link href='/confirm'>
            <a>
        <button>Get Started</button>
        </a>
        </Link>
      </ContainerA>
    </Contain>
  </Page>
)
export default Index
