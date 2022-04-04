import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
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
      <P>The mode magazine for understanding to personally enjoy Japan.</P>
      <P>
        It is one of the projects launched at{' '}
        <Link href="https://innolab.jp/" target="_blank">
          Open Innovation Lab (電通イノラボ) <ExternalLinkIcon mx="2px" />
        </Link>
        , aiming to visualize the impact of media contents on the visit of
        foreign high-intellect class to Japan, who are highly interested in
        Japanese culture. I joined the project to build its mobile app for iOS
        where you can read free articles of the magazine.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Ubuntu Minit</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C++</span>
        </ListItem>
        <ListItem>
          <Meta>Press release</Meta>
          <Link href="https://www.isid.co.jp/english/news/release/2015/pdf/20150930_ModeTokyo.pdf">
            on Visit of Foreign High-Intellect Class to Japan{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Press release</Meta>
          <Link href="https://innolab.jp/news/achievement/335">
            メディアコンテンツが訪日行動に与える影響を可視化する研究プロジェクトを始動{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

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
