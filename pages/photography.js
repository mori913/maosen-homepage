import {
  Container,
  Heading,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Choropleth from '../components/choropleth'

const Posts = () => {
  return (
    <Layout title="Blog">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Country
        </Heading>
        <Tabs
          variant="unstyled"
          bg={useColorModeValue('#ffffff40', '#20202380')}
          rounded="lg"
        >
          <TabList
            rounded={'lg'}
            bg={useColorModeValue('#EFE6DB', '#20202380')}
          >
            <Tab rounded="lg" _selected={{ bg: 'blue.500' }}>
              Japan
            </Tab>
            <Tab rounded="lg" _selected={{ bg: 'red.400' }}>
              China
            </Tab>
            <Tab rounded="lg" _selected={{ bg: 'green.400' }}>
              German
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Choropleth country={'Japan'} />
            </TabPanel>
            <TabPanel>
              <Choropleth country={'China'} />
            </TabPanel>
            <TabPanel>
              <Choropleth country={'German'} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Layout>
  )
}

export default Posts
export { getServerSideProps } from '../components/chakra'
