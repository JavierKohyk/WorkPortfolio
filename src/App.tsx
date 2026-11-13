import { Flex, Heading, Separator, Text } from '@radix-ui/themes'
import Navbar from './components/Navbar'
import Showcase from './components/HomepageShowcase'
import HomepageAbout from './components/HomepageAbout'
import ProjectsGrid from './components/ProjectsGrid'
import PageEnd from './components/PageEnd'
import { HashRouter, Route, Routes } from "react-router"
import ThailandProject from './components/Projects/Thailand'



{/* This code block is for the Homepage */}
const App = () => {
  return (
    <HashRouter basename={import.meta.env.VITE_PUBLIC_URL}>
      <Routes>
        <Route index element={
           <Flex direction='column'>
            <Navbar />
            <HomepageAbout />
            <Flex gap='10px' py='3' direction='column' justify="center" 
            align="center" style={{'backgroundColor':'beige'}}>
              <Heading style={{'color':'#123456'}} size='7'> Recent Projects </Heading>
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
      <Flex px='9' gap='9' align='center' justify='center'>
        <Flex gap='20px' direction='column' minHeight={'300px'} minWidth={'400px'}>
            <img
              src="https://images.unsplash.com/photo-1479030160180-b1860951d696?&auto=format&fit=crop&w=1200&q=80"
              alt="A house in a forest"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                borderRadius: "var(--radius-2)",
              }}
            />
        <Text>
            <Heading size='4'> Contact Me </Heading>
            Email: <br/>
            Linkedin:
        </Text>
        </Flex>
        <Flex>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
          id est laborum. <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
          id est laborum. <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
          id est laborum.
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

export default App
