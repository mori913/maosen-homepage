import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Heading,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Job comparision">
    <Container>
      <Title>
        Job comparision <Badge>2022</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/amembo_icon.png" alt="icon" />
      </Center>
      <P>
      An android application that allows a single user to compare job offers based on their yearly salary, yearly bonus, retirement benefits, relocation stipend, and restricted stock options.
      </P>
      <P>
       The user will be able to add, edit, and remove job offers, save a job as draft, compare the offers, and view a ranked listing of offers based on the before mentioned options. Additionally, the user will be able to change the weights associated with the ranking algorithm to better suite their needs. The application will store the current state of the application to a Android SQLite database to allow the user to return to the application at a later time with their previous state.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Android studio</span>
        </ListItem>
        <ListItem>
          <Meta>Source code</Meta>
          <Link href="https://github.com/mori913/NBA">readme</Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>UML</Center>
      </Heading>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/amembo_01.gif" alt="amembo" />
        <WorkImage src="/images/works/jobcomparison_01.png" alt="jobcomparision" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
