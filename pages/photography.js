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
import Region from '../locales/content'
import { useRouter } from 'next/router'

function Posts() {
  const router = useRouter()
  let t = Region(router)
  return (
    <Layout title="Photography">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          {t.country}
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
              {t.japan}
            </Tab>
            <Tab rounded="lg" _selected={{ bg: 'red.400' }}>
              {t.china}
            </Tab>
            <Tab rounded="lg" _selected={{ bg: 'green.400' }}>
              {t.german}
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
