import { Flex, Heading, Separator, Text, Strong } from '@radix-ui/themes'
import Navbar from './Navbar'
import PageEnd from './PageEnd'

import Fig1 from '../assets/MSF Fig 1.png'
import Fig2 from '../assets/MSF Fig 2.png'
import Fig3 from '../assets/MSF Fig 3.png'

const MSFProject = () => {
    return (
        <Flex direction='column'>
            <Navbar />
                <Flex gap='10px' py='3' direction='column' align='center'>
                    <Heading size='7'> Geospatial Project with MSF </Heading>
                </Flex>
                <Separator orientation='horizontal' size='4'/>
                <Flex direction='column' px='9' gap='3' align='start' justify='start'>
                <Flex height='20px' />
<Text>
This project was done as part of a 24-week internship with the Ministry of Social and Family Development (MSF) from June 2026 to November 2026.
</Text>
<Text>
<Strong>Project:</Strong> Will distance between residence and location of employment influence the employment outcomes of clients in program A?
</Text>
<Text>
<Strong>Hypothesis 1:</Strong> A longer network distance (measured by travel time) between the residence of clients and the nearest town of high job density of client hiring industries results in a lower likelihood of entering stable employment.
</Text>
<Text>
<Strong>Hypothesis 2:</Strong> A longer network distance (measured by travel time) between the residence of employed clients and place of employment results in a lower likelihood of remaining in employment.
</Text>
<Text>
<Strong>Motivation:</Strong> The findings could help translate geospatial analysis into practical recommendations.
</Text>
<Flex height='5px' />
<Separator orientation='horizontal' size='4'/>
<Text>
<Strong>Process:</Strong><br />
Using python and excel, the relevant database variables were extracted and transformed into a usable dataset for analysis. This involved the cleaning of data and the transformation of certain categorical variables into dichotomous variables, which would be used for the regression analysis.
For the employment data, Client employment data was appended to publicly available ACRA dataset from data.gov website to identify all unique companies which had employed clients. The SSIC number which represented the industry these companies were in was used to identify which were the top few industries which employed clients. The postal codes of these companies were taken, geocoded and aggregated according to the chosen unit area.
</Text>
<Text>
<Strong>Geospatial considerations:</Strong><br/>
Following the creation of the project dataset, a key problem I had to contend with was the Modifiable Areal Unit Problem (MAUP); When point based data (such as locations of clients and jobs) are aggregated into arbitrary regions, resulting analysis could be biased. I had a few possible solutions, but due to certain constraints, decided to make use of publicly available data from data.gov, specifically the URA 2019 planning area boundary as the areal unit of choice. Using QGIS, I determined the centroid of the polygon and found the MRT closest to it based on Euclidean distance. Analysis was then performed using an internal program to find the time taken using public transport from places of clients’ residences to the respective MRT stations.
</Text>
<Text>
<Strong>Results and analysis:</Strong>
</Text>
<Flex direction = 'column' align='center' gap='3'><img src={Fig1} height='300px' width='500px' />
<Text align='left' size='1'>Credit to OpenStreetMap for basemap layer</Text>
<Text align='center'>
Figure 1 shows where client hiring companies are concentrated (areas with a thicker black border). These areas are Downtown Core, Rochor, Kallang, Geylang, Bedok, Tampines, Hougang, Woodlands.
</Text>
</Flex>
<Flex justify='center'>
<img src={Fig2} height='450px' width='500px' />
<img src={Fig3} height='450px' width='500px' />
</Flex>
<Text>
Figures 2 (left) and 3 (right) show how long each client would take on average to travel to areas of high job density from their place of residence, and how long it takes from employed clients to travel to their jobs.

The median travel time for both employed and unemployed clients to areas of high job density is reflected in fig 2. For employed clients, the median travel time to their actual workplace is observed to be longer than the median travel time. 

This discrepancy between travel times could be due to last-mile connectivity between the identified MRT station and the travel time to a place of employment. This is due to the assumptions made earlier, which was to calculate travel time from a client’s residence to the MRT nearest to the centre of high job-density areas.
</Text>
<Text>
<Strong>Conclusion and Limitations: </Strong>
<br />
Two regression models, an Ordinary Least-Squares and Logistic regression model were used on the dataset to answer hypotheses 1 and 2 respectively. The results were that, controlling for relevant demographic variables, the relationship between travel time and employment outcomes are not statistically significant to arrive at any conclusion by itself. 

Some limitations were that the program used to calculate time taken assumes a constant speed for each form of travel (walking, bus, MRT) and does not account for crowds, jams, delays, breakdowns. The program also does not account for barrier-free pathways (changes due to construction, accessibility issues, sheltered paths). Additionally, the assumptions made in the study, especially the choice of areal units, could have affected how geospatial patterns were shown. 
</Text>
<Flex height='20px' />
                </Flex>
            <PageEnd />
        </Flex>
    )
}


export default MSFProject