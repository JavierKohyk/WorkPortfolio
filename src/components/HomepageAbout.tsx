import { Flex, Text, Link, Button } from "@radix-ui/themes"
import Profile from '../assets/Professional PFP.jpg'

const HomepageAbout = () => {
    return (
        <Flex
         style={{"backgroundColor":"#123456"}} px="9" py='6' gap="8" align={"center"} justify="between"
         >
            <Flex px="9">
                <img src={Profile} height='300px' width='300px' style={{ borderRadius: '50%'}}/>
            </Flex>
            <Flex px="5" direction="column" gap="3">
                <Text size="8" weight="bold" style={{color:"beige", fontFamily:"Libre Caslon Text"}}> 
                    Hello There! 
                </Text>
                <Text size='5' style={{color:"beige", fontFamily:"Libre Caslon Text"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
                    id est laborum.
                </Text>
                <Flex justify="end" pt='4' gap="3" align="center">
                    <Link href="#/about">
                        <Button size="3" variant="solid" style={{"backgroundColor":"beige"}}>
                            <Text style={{"color":"#123456"}}> More about me </Text>
                        </Button>
                    </Link>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default HomepageAbout