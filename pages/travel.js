import {
  Container,
  Heading,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Choropleth from '../components/choropleth'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Country
      </Heading>
      <Tabs variant="unstyled" bg={'#F5F0E8'} rounded="lg">
        <TabList rounded={'lg'}>
          <Tab rounded="lg" _selected={{ color: 'white', bg: 'blue.500' }}>
            China
          </Tab>
          <Tab rounded="lg" _selected={{ color: 'white', bg: 'green.400' }}>Japan</Tab>
          <Tab rounded="lg" _selected={{ color: 'white', bg: 'green.400' }}>German</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Choropleth/>
          </TabPanel>
          <TabPanel>
            <p>China</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
