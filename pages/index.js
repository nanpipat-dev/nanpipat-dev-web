import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  GridItem,
  Grid,
  Text,
  Flex,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord,
  IoLogoLinkedin,
  IoLogoMedium,
  IoLogoGoogle
} from 'react-icons/io5'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ExpSection, ExpCompany, ExpYear } from '../components/exp'
import ExperienceSection from '../components/section/experience'
import ProjectsSection from '../components/section/projects'
import ProfileImg from '../public/images/profile.jpg'
import VoxelRobotLoader from '../components/voxel-robot-loader'
import dynamic from 'next/dynamic'


const Page = () => {
  return (
    <Container maxWidth="100%">
      <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
        Hello, I&apos;m a full-stack developer. and you can call me "Top" ♥
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Nanpipat Klinpratoom
          </Heading>
          <p>Full Stack Developer. </p>
        </Box>
        <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
          <Image src="/images/profile.jpg" borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" alt="profile" />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <Text>
          I am a fullstack-developer with a vast array of knowledge in many different front-end and back-end languages, responsive frameworks, databases,
          and best code practices.
        </Text>
        <Box align="center" my={4}>
          <Link href="/doc/resume.pdf">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Dowload CV
            </Button>
          </Link>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Experience
        </Heading>
        <ExperienceSection />
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Projects
        </Heading>
        <ProjectsSection />
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Image src="/images/cartoon.jpg" width={220} margin={7} />
        <Text ml={7}>
          love to play music.
        </Text>
        <Text ml={7}>
          love to watch the concerts.
        </Text>
        <Text ml={7}>
          and love to watch someone music performance.
        </Text>
        <Text ml={7}>
          music is my life.
        </Text>

      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Contact
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/nanpipat" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @nanpipat
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/nanpipat-klinpratoom-b859361bb/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                @nanpipat-klinpratoom
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://medium.com/@nanpipat.k" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoMedium} />}
              >
                @nanpipat.k
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:nanpipat.k.dev@gmail.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGoogle} />}
              >
                nanpipat.k.dev@gmail.com
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  )
}

export default Page