import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="mode.tokyo">
    <Container>
      <Title>
        Humanoid robot <Badge>2016-2017</Badge>
      </Title>
      <P>The humanoid robot for robotics competition.</P>
      <P>
        It is one of the projects launched at{' '}
        <Link href="http://english.mse.hust.edu.cn/" target="_blank">
          School of Mechanical Engineering, Huazhong Univ of Sci&Eng<ExternalLinkIcon mx="2px" />
        </Link>
        , aiming to cultivate the Engineering skills of students through competition between domestic and international teams, who are highly interested in
        Japanese culture. I joined the project to build robotics electrical control
         board and embedded software.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Ubuntu Minit</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C++, Qt</span>
        </ListItem>
        <ListItem>
          <Meta>Press release</Meta>
          <Link href="http://mse.hust.edu.cn/info/1230/10106.htm">
          HFR团队简介与招新{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Introduction movies</Center>
      </Heading>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>
      <WorkImage src="/images/works/robot_eyecatch.jpg" alt="mode.tokyo" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/robot_01.png" alt="mode.tokyo" />
        <WorkImage src="/images/works/robot_02.jpg" alt="mode.tokyo" />
      </SimpleGrid>
      <WorkImage src="/images/works/robot_03.png" alt="mode.tokyo" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
