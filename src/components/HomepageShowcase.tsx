import { Box, Button, Flex, Heading, Text, Separator, Link } from "@radix-ui/themes"
import { useState, type FC } from "react"
import { data } from "react-router"
import ProjectShowcase from "./HomepageProjectShowcase.json"


type Data = {
    Title: string,
    Description: string,
    Image: string,
    Link: string
}

type ChildProps = {
    data: Data
}


const Child: FC<ChildProps> = ({data}) => {
    return (
        <Box minHeight={'400px'} minWidth={'900px'} style={{"backgroundColor":"#123456"}} m="4">
            <Flex direction='column' align='center' gap='4' pt='4' px='3'>
                <Heading size='6' style={{color:"beige", fontFamily:"Libre Caslon Text"}}> 
                    {data.Title} 
                </Heading>
                <Separator orientation='horizontal' size='4' color="yellow"/>
                <Flex gap='4' px='5'>
                    <img src={data.Image} width='450px' height='300px' />
                    <Flex direction='column' height='300px'>
                        <Text size='4' style={{color:"beige", fontFamily:"Libre Caslon Text"}}> 
                            {data.Description} 
                        </Text>
                        <Flex justify="end" pt='4' gap="3" mt='auto'>
                            <Link href={data.Link}>
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


const Showcase = () => {
    const list = ProjectShowcase
    const showLen = 1;
    const [listStart, setListStart] = useState(0);

    const incrementListStart = (incr: number) => {
        setListStart((s) => Math.max(0, Math.min(s + incr, list.length - showLen)));
    }
    return (
        <Flex m="9" align='center'>
            <Button onClick={() => incrementListStart(-1)}>{"<"} </Button>
            {list.slice(listStart, listStart + showLen).map((n) => (
                <Child data = {n} key={data.name} />
            ))}
            <Button onClick={() => incrementListStart(1)}>{">"}</Button>            
        </Flex>
    )
}

export default Showcase