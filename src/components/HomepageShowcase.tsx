import { Box, Button, Flex, Heading, Text, Separator, Link } from "@radix-ui/themes"
import MSF from '../assets/MSF Fig 1.png'


const Showcase = () => {
    return (
        <Box minHeight={'400px'} maxWidth={'1000px'} style={{"backgroundColor":"#123456"}} m="4">
            <Flex direction='column' align='center' gap='4' pt='4' px='3'>
                <Heading size='6' style={{color:"beige", fontFamily:"Libre Caslon Text"}}> 
                    How distance to jobs affects employment outcomes of MSF program clients in Singapore
                </Heading>
                <Separator orientation='horizontal' size='4' color="yellow"/>
                <Flex gap='4' px='5'>
                    <img src={MSF} width='450px' height='300px' />
                    <Flex direction='column' height='300px'>
                        <Text size='4' style={{color:"beige", fontFamily:"Libre Caslon Text"}}> 
                            This project was done as part of my internship with the Ministry of Social and Family Development. This project looks at how travel distance to location of employment could impact employment outcomes.
                        </Text>
                        <Flex justify="end" pt='4' gap="3" mt='auto'>
                            <Link href={'#/MSF'}>
                                <Button size="3" variant="solid" style={{"backgroundColor":"beige"}}>
                                    <Text style={{"color":"#123456"}}> More about this project </Text>
                                </Button>
                            </Link>
                        </Flex>
                    </Flex>
                </Flex> 
            </Flex>
        </Box>
    )
}

export default Showcase