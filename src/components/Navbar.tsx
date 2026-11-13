import { Text, Flex, Link, Heading } from "@radix-ui/themes"

const Navbar = () => {
    return (
        <Flex
         style={{"backgroundColor":"beige"}} px="9" gap="4" minHeight={"60px"} 
         align={"center"} justify="between"
         >
            <Flex direction="column" py="4" px="7">
                <Heading style={{color: "#123456", fontFamily:"Libre Caslon Text"}} size="7">
                    Javier Koh
                </Heading>
                <Text style={{fontFamily:"Libre Caslon Text"}}>
                    Geospatial Data Analysis | Python | Cartography
                </Text>
            </Flex>
            <Flex gap="5">
                <Link href="\" weight="bold" size='5'> 
                    Home
                </Link>
                <Link href="about" weight="bold" size='5'>
                    About Me
                </Link>
                <Link href="Portfolio" weight="bold" size='5'>
                    Portfolio
                </Link>
            </Flex>
        </Flex>
    )
}

export default Navbar