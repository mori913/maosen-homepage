import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/microscopy_eyecatch.png'
import thumbJobcomparision from '../public/images/works/jobcomparision_eyecatch.png'
import thumbRobot from '../public/images/works/robot_eyecatch.jpg'
import thumbAmembo from '../public/images/works/nba_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="Two photon microscopy" thumbnail={thumbInkdrop}>
            Two-photon microscopy for imaging neurons deeper than 1mm in cortex.
          </WorkGridItem>
        </Section>
       
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="robot"
            thumbnail={thumbRobot}
            title="Humonaid robot"
          >
            The Humonaid robots build for Robocup and FIRA
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="robot"
            thumbnail={thumbRobot}
            title="Interventional robot"
          >
            The Humonaid robots build for Robocup and FIRA
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Course project
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.6}>
          <WorkGridItem id="nba" thumbnail={thumbAmembo} title="NBA champion">
            A visual anlytics website for NBA data and predict the NBA champion in 2022. 
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="jobcomparision" thumbnail={thumbJobcomparision} title="Job comparision">
          An android application that allows a user to compare job offers based on muiltiple options. 
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="File synchronize">
            A visual anlytics website for NBA data and predict the NBA champion in 2022. 
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
