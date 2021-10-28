import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from "../section"
import { GridItem } from '../grid-item'

import thumbFishWorkflow from '../../public/images/tenor.png'

const ProjectsSection = () => {
    return (
        <div style={{ marginTop: '30px' }}>
            <Section delay={0.1}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        title="Project 1 "
                        thumbnail={thumbFishWorkflow}
                        href="#"
                        demo="#"
                        code="#"
                    />
                    <GridItem
                        title="Project 2"
                        thumbnail={thumbFishWorkflow}
                        href="#"
                        demo="#"
                        code="#"
                    />
                </SimpleGrid>
            </Section>
            <Section delay={0.2}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        title="Project 1 "
                        thumbnail={thumbFishWorkflow}
                        href="#"
                        demo="#"
                        code="#"
                    />
                    <GridItem
                        title="Project 2"
                        thumbnail={thumbFishWorkflow}
                        href="#"
                        demo="#"
                        code="#"
                    />
                </SimpleGrid>
            </Section>
        </div>
    )
}

export default ProjectsSection