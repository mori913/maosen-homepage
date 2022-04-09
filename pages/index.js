import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoMail, IoLogoGithub } from 'react-icons/io5'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a second year master student in Utokyo!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Ye Maosen
          </Heading>
          <p>Craftsman ( Mechanical designer / Developer / Programmer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/maosen.jpeg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Maosen is a second-year master in university of tokyo with a passion for
          building biomedical instrument he wants. He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems. When not working, he loves
          hanging out with his camera. Currently, he is working in <Link href="http://www.bmpe.t.u-tokyo.ac.jp/en/">BMPE</Link>.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1998</BioYear>
          Born in Qintian, Zhejiang, China.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Completed the bacher&apos;s program in Faculty of Mechanical and Intelligent Systems Engineering at Huazhong University of Science and Technology
        </BioSection>
        <BioSection>
          <BioYear> now </BioYear>
          Pursue MEng degree in Biomedical, Utokyo.
          Supervised by {' '}
          <Link href="https://sites.google.com/site/keinakagawa6/home?authuser=0">Nakagawa Keiichi</Link>
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I Love
        </Heading>
        <Paragraph>
          Jpop Music,{' '}
          <Link href="https://space.bilibili.com/159065754/bangumi" target="_blank">
            Anime
          </Link>
          , Badminton,{' '}
            Photography, Light novel 
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/mori913" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @mori913
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/BI4mkal8nhVXFdJ" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @葉茂森 (中文)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto: yemaosen123@gmail.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoMail} />}
              >
                @ye maosen
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
