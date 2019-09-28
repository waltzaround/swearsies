import Page from '../components/Page'
import { Contain, ContainerA, Image} from '../components/components'

const Confirm = () => (
    <Page>
    <Contain>
      <ContainerA>
        <Image src='./static/welcome.png' />
      </ContainerA>
      <ContainerA>
        <h1>Confirm
        </h1>
        <h5>This app sends $5 every time you swear into your swear jar. Are you sure you want to continue?</h5>
        <button>Confirm</button>
      </ContainerA>
    </Contain>
  </Page>
)
export default Confirm
