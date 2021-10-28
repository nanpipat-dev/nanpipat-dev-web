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
            <Flex my={4}>
                <Box w="260px">
                    <Text fontWeight="bold" mr={2}>
                        Netcube Soft
                    </Text>
                    <Text fontSize="smaller" color="teal">
                        (2018 - 2021)
                    </Text>
                </Box>
                <Box>
                    <Text>
                        Develop software, such as website, application, system, etc. Base language in Back End is C#,.NET Core, .NET Framework and Base Front End is Angular Framework.
                    </Text>
                </Box>
            </Flex>
            <Flex my={4}>
                <Box w="193px">
                    <Text fontWeight="bold" mr={2}>
                        Freelance
                    </Text>
                    <Text fontSize="smaller" color="teal">
                        (2018 - Present)
                    </Text>
                </Box>
                <Box>
                    <Text>
                        Develop and Bug fixed Software , Application or Website by requirement. Don't expect language. Mostly is Web Developer
                    </Text>
                </Box>
            </Flex>
        </>

    )
}

export default ExperienceSection