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
                    My name is Javier. I am a student in the National University of Singapore, studying geography as well as geographical information systems (GIS). I like to
                    work with data, and am always eager to learn about more new things. On this website, you will get to see some of the projects I have worked on, and some of my interests in geospatial data as well as data analysis and visualization.
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