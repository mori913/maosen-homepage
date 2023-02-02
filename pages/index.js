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
import { useRouter } from 'next/router'
import { IoLogoTwitter, IoMail, IoLogoGithub } from 'react-icons/io5'

import en from '../locales/en'
import jp from '../locales/jp'
import cn from '../locales/cn'

function Home() {
  const router = useRouter()
  const { locale } = router
  let t = en
  switch (locale) {
    case 'jp':
      t = jp
      break
    case 'cn':
      t = cn
      break
    default:
      t = en
  }
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          {t.greeting}
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              {t.name}
            </Heading>
            <p>{t.briefIntroduction}</p>
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
              maxWidth="105px"
              display="inline-block"
              src="/images/maosen.jpeg"
              alt="Profile image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            {t.work}
          </Heading>
          <Paragraph>{t.workContent}</Paragraph>
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
            {t.bio}
          </Heading>
          <BioSection>
            <BioYear> now </BioYear>
            {t.educationContent1}
          </BioSection>

          <BioSection>
            <BioYear>2020</BioYear>
            {t.educationContent2}
          </BioSection>
          <BioSection>
            <BioYear>2016</BioYear>
            {t.educationContent3}
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            {t.love}
          </Heading>
          <Paragraph>{t.loveContent}</Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            {t.web}
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
                  @BI4mkal8nhVXFdJ
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
}

export default Home
export { getServerSideProps } from '../components/chakra'
