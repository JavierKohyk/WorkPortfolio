import { Flex, Heading, Separator, Text, Strong } from '@radix-ui/themes'
import Navbar from './Navbar'
import PageEnd from './PageEnd'

import Fig1 from '../assets/Thailand Fig 1.jpg'
import Fig2 from '../assets/Thailand Fig 2.png'

const ThailandProject = () => {
    return (
        <Flex direction='column'>
            <Navbar />
                <Flex gap='10px' py='3' direction='column' align='center'>
                    <Heading size='7'> Community Mapping in Thailand </Heading>
                </Flex>
                <Separator orientation='horizontal' size='4'/>
                <Flex direction='column' px='9' gap='3' align='start' justify='start'>
                <Flex height='20px' />
<Flex px='9' gap='3' align='center'>
    <img src={Fig1} height='350px' width='250px' />
    <Flex direction='column' gap = '3' justify='center'>
        <Text>
        This project was done in order to help fight for land rights and government recognition of the village's efforts in conservation.
        </Text>
        <Text>
        We were tasked with creating a map which integrated data from Inter Mountain Peoples Education and Culture in Thailand Association (IMPECT)
        alongside the mapping of local conservation sites in the river and in the surrounding forests. 
        </Text>
        <Text>
        Data collection for the community mapping project combined interviews, fieldwork, and the use of various
GIS software tools to ensure accuracy and local relevance. First, data from IMPECT was taken, and relevant questions were asked to understand how the data was collected and what it meant.
Interviews were then conducted with key village figures, including the village chief and his daughter, who were involved in the enforcement of aforementioned conservation areas.
GarminGPS was used to collect reference points at each site, and the files were uploaded into QGIS.
        </Text>
    </Flex>
</Flex>
<Flex height='20px' />
    <Flex direction='column' gap = '3' align='center'>
        <Text>
        <Strong>Geospatial considerations and issues:</Strong> <br />
        The key concern with the project was the issue of data portability. First, there was a mismatch in the rojected coordinate
        system and Geographic coordinate system between collected data and data given by IMPECT. This was resolved in QGIS.
        Additionally, data files from IMPECT were in Thai and thus not easily understandable at a glance which files did what.
        For our data files, documentation was provided to clearly explain the purpose behind relevant data files and their location within the folders.
              <br />
              <br />
              The following map is the result.  
                </Text>
        <img src={Fig2} height='750px' width='550px'/>
    </Flex>
        </Flex>
<Flex />
<Flex height='20px' />
        <PageEnd />
    </Flex>
    )
}


export default ThailandProject