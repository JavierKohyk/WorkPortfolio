import { Text, Flex, Grid, Box, Link, Heading } from "@radix-ui/themes"

const ProjectsGrid = () => {
    return(
        <Grid columns="3" gap="3" width='auto'>
            <Link href = "#/Thailand">
                <Flex width='400px' height='250px' style={{"backgroundColor":"beige", 'borderRadius': '5%'}}
                direction='column' px='2' py='3' gap='1'>
                    <Flex direction='column' align='center' gap='3'>
                        <Heading size='4'>Community Mapping in Thailand </Heading>
                        <Box width='350px' height='170px'style={{"backgroundColor":"blue"}}/>
                    </Flex>
                    <Flex px='4'><Text align='left' size='2'> Skills used: QGIS, Python </Text></Flex>
                </Flex>
            </Link>
            <Flex width='400px' height='250px' style={{"backgroundColor":"grey"}}/>
            <Flex width='400px' height='250px' style={{"backgroundColor":"grey"}}/>
            <Flex width='400px' height='250px' style={{"backgroundColor":"grey"}}/>
        </Grid>
    )
}

export default ProjectsGrid