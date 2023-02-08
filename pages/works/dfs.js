import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="TPM">
    <Container>
      <Title>
        Two photon microscopy <Badge>2020-</Badge>
      </Title>
      <P>
        Two-photon microscopy for imaging neurons up to 2mm in the cortex. Our
        lab use the light guiding effect of acoustic wave to reduce the
        scattering in biological tissue and achieve much deeper imaging depth.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Matlab</span>
        </ListItem>
        <ListItem>
          <Meta>Publication</Meta>
          <span>To be done</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
