import { Container, Heading, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

function Posts() {
  return (
    <Layout title="Blog">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          中文
        </Heading>
        <Heading as="h3" fontSize={20} mb={4}>
          English
        </Heading>
        <Box mb={6} textAlign="center">
          Under construction
        </Box>
        <Heading as="h3" fontSize={20} mb={4}>
          日本語
        </Heading>
        <Box mb={6} textAlign="center">
          準備中
        </Box>
      </Container>
    </Layout>
  )
}

export default Posts
export { getServerSideProps } from '../components/chakra'
