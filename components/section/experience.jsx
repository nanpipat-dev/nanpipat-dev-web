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
const ExperienceSection = () => {
    return (
        <>
            <Grid my={4} templateColumns="repeat(5,  1fr)">
                <GridItem colSpan={[2,1,1]}>
                    <Text fontWeight="bold" mr={2}>
                        Netcube Soft
                    </Text>
                    <Text fontSize="smaller" color="teal">
                        (2018 - 2021)
                    </Text>
                </GridItem>
                <GridItem colSpan={[3,4,4]}>
                    <Text>
                        Develop software, such as website, application, system, etc. Base language in Back End is C#,.NET Core, .NET Framework and Base Front End is Angular Framework.
                    </Text>
                </GridItem>
            </Grid>
            <Grid my={4} templateColumns="repeat(5,  1fr)">
                <GridItem colSpan={[2,1,1]}>
                    <Text fontWeight="bold" mr={2}>
                        Freelance
                    </Text>
                    <Text fontSize="smaller" color="teal">
                        (2018 - Present)
                    </Text>
                </GridItem>
                <GridItem colSpan={[3,4,4]}>
                    <Text>
                        Develop and Bug fixed Software , Application or Website by requirement. Don't expect language. Mostly is Web Developer
                    </Text>
                </GridItem>
            </Grid>
        </>

    )
}

export default ExperienceSection