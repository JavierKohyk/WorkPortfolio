import { Flex, Text } from "@radix-ui/themes"

const PageEnd = () => {
    return (
        <Flex direction="column">
            <Flex
            style={{backgroundColor:"lightgrey"}} px="9" minHeight={"60px"} 
            align="center" justify="center">
                <Text>
                     Contact me at: kohyk.javier@gmail.com
                </Text>
            </Flex>
            <Flex style={{backgroundColor:"#1a1e21"}} px="9" gap="4" minHeight={"60px"}
            align="center" justify="center">
                <Text style={{color:"white"}}>
                    © 2026 Javier Koh.
                </Text>
            </Flex>
        </Flex>
    )
}

export default PageEnd