import { Flex, Heading, Separator, Text } from '@radix-ui/themes'
import { HashRouter, Route, Routes } from "react-router"

import Navbar from './components/Navbar'
import Showcase from './components/HomepageShowcase'
import HomepageAbout from './components/HomepageAbout'
import ProjectsGrid from './components/ProjectsGrid'
import PageEnd from './components/PageEnd'

import ThailandProject from './components/Thailand'
import MSFProject from './components/Msf'
import pfp from './assets/about me pic.jpg'



{/* This code block is for the Homepage */}
const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route index element={
           <Flex direction='column'>
            <Navbar />
            <HomepageAbout />
            <Flex gap='10px' py='3' direction='column' justify="center" 
            align="center" style={{'backgroundColor':'beige'}}>
              <Heading style={{'color':'#123456'}} size='7'> Most Recent Project </Heading>
              <Separator orientation='horizontal' size='4'/>
              <Showcase />
            </Flex>
            <PageEnd />
          </Flex>
        }>
        </Route>
        <Route path='about' element={<AboutPage />}></Route>
        <Route path='Portfolio' element={<PortfolioPage />}></Route>
        <Route path='Thailand' element={<ThailandPage />}></Route>
        <Route path='MSF' element={<MSFPage />}></Route>
      </Routes>
    </HashRouter>
  )
}


{/* This code block is for the About page */}
const AboutPage = () => {
  return (
    <Flex gap='20px' direction='column'>
      <Navbar />
      <Flex gap='10px' direction='column' align='center'>
        <Heading size='7'> About Me </Heading>
      </Flex>
      <Separator orientation='horizontal' size='4'/>
      <Flex px='9' gap='9' justify='center'>
        <Flex gap='20px' direction='column' minHeight={'300px'} minWidth={'400px'}>
            <img src={pfp} height='300px' width='430px'
            />
        <Text>
            <Heading size='4'> Contact Me </Heading>
            Email: kohyk.javier@gmail.com<br/>
            Linkedin: www.linkedin.com/in/javier-kohyk
        </Text>
        </Flex>
        <Flex direction='column' gap ='3'>
<Text>
I am a student in the National University of Singapore, studying geography and Geographical Information Systems.
I enjoy working with data and vsiualising it in an interesting but understandable and straightfoward manner.
I have experience working in the field to collect geospatial data, in places like Thailand and Cambodia, and work well with indigenous peoples to co-create useful products.
</Text>
In my spare time, I like to learn more about various subjects, and am always working to better myself. I have a soft spot for social issues, and volunteer with NGOs to help make spaces in Singapore a better place.

        </Flex>
      </Flex>
      <PageEnd />
    </Flex>
  )
}


{/* This code block is for the Portfolio page */}
const PortfolioPage = () => {
  return (
    <Flex direction='column'>
      <Navbar />
      <Flex pt='3' pb='5' gap='10px' direction='column' align='center' style={{'backgroundColor':'#123456'}}>
        <Heading size='7' style={{'color':'beige'}}> My Projects </Heading>
        <Separator orientation='horizontal' size='4' style={{'backgroundColor':'beige'}}/>
        <Text style={{'color':'beige'}}> Click on any project to find out more! </Text>
        <ProjectsGrid />
      </Flex>
      <PageEnd />
    </Flex>
  )
}

const ThailandPage = () => {
  return(
    <ThailandProject />
  )
}

const MSFPage = () => {
  return(
    <MSFProject />
  )
}

export default App
