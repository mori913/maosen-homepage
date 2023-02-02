import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbTPM from '../public/images/works/microscopy_eyecatch.png'
import thumbJobcomparision from '../public/images/works/jobcomparision_eyecatch.png'
import thumbRobot from '../public/images/works/robot_eyecatch.jpg'
import thumbNBA from '../public/images/works/nba_eyecatch.png'
import thumbSurgical from '../public/images/works/surgery_eyecatch.jpg'
import thumbDFS from '../public/images/works/DFS_eyecatch.png'
import Region from '../locales/content'
import { useRouter } from 'next/router'

function Works() {
  const router = useRouter()
  let t = Region(router)

  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          {t.research}
        </Heading>

        <SimpleGrid columns={[1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="tpm" title={t.tpm} thumbnail={thumbTPM}>
              {t.tpmContent}
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.4}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            {t.project}
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.6}>
            <WorkGridItem id="robot" thumbnail={thumbRobot} title={t.robot}>
              {t.robotContent}
            </WorkGridItem>
          </Section>
          <Section delay={0.6}>
            <WorkGridItem
              id="jobcomparision"
              thumbnail={thumbJobcomparision}
              title={t.job}
            >
              {t.jobContent}
            </WorkGridItem>
          </Section>
          <Section delay={0.6}>
            <WorkGridItem id="DFS" thumbnail={thumbDFS} title={t.dfs}>
              {t.dfsContent}
            </WorkGridItem>
          </Section>
        </SimpleGrid>
        <Section delay={0.2}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            {t.collaboration}
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem id="nba" thumbnail={thumbNBA} title={t.nba}>
              {t.nbaContent}
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem id="robot" thumbnail={thumbSurgical} title={t.ivr}>
              {t.ivrContent}
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}
export default Works
export { getServerSideProps } from '../components/chakra'
