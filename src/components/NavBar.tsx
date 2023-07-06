import { Box, HStack, Image } from "@chakra-ui/react"
import logo from '../assets/logo.webp'
import SearchBar from "./SearchBar"
import ToggleColorMode from "./ToggleColorMode"
import { Link } from "react-router-dom"


const NavBar = () => {
    return (
        // hstack is a flex div in chakra with flex-direction: column
        <HStack justifyContent='space-between' padding='15px' paddingBottom={10}>
            <Link to={'/'}>
                <Box boxSize={'55px'}>
                    <Image src={logo} />
                </Box>
            </Link>
            <SearchBar />
            <ToggleColorMode />
        </HStack>
    )
}

export default NavBar