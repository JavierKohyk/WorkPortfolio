import { Text, Flex, Grid, Link, Heading } from "@radix-ui/themes"

import MSF from '../assets/MSF Fig 1.png'
import Thailand from '../assets/Thailand cover.png'

const ProjectsGrid = () => {
    return(
        <Grid columns="3" gap="3" width='auto'>
            <Link href = "#/MSF">
                <Flex width='400px' height='250px' style={{"backgroundColor":"beige", 'borderRadius': '5%'}}
                direction='column' px='2' py='3' gap='1'>
                    <Flex direction='column' align='center' gap='3'>
                        <Heading size='4'> Geospatial Project with MSF </Heading>
                        <img src={MSF} height='170px' width='350px' />
                    </Flex>
                    <Flex px='4'><Text align='left' size='2'> Skills used: QGIS, Python </Text></Flex>
                </Flex>
            </Link>
            <Link href = "#/Thailand">
                <Flex width='400px' height='250px' style={{"backgroundColor":"beige", 'borderRadius': '5%'}}
                direction='column' px='2' py='3' gap='1'>
                    <Flex direction='column' align='center' gap='3'>
                        <Heading size='4'>Community Mapping in Thailand </Heading>
                        <img src={Thailand} height='170px' width='350px' />
                    </Flex>
                    <Flex px='4'><Text align='left' size='2'> Skills used: QGIS </Text></Flex>
                </Flex>
            </Link>
        </Grid>
    )
}

export default ProjectsGrid