import { HStack, Image } from "@chakra-ui/react"
import logo from '../assets/logo.webp'
import SearchBar from "./SearchBar"
import ToggleColorMode from "./ToggleColorMode"


const NavBar = () => {
    return (
        // hstack is a flex div in chakra with flex-direction: column
        <HStack justifyContent='space-between' padding='15px'>
            <Image src={logo} boxSize='60px' />
            <SearchBar />
            <ToggleColorMode />
        </HStack>
    )
}

export default NavBar