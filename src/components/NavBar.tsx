import { HStack, Image } from "@chakra-ui/react"
import logo from '../assets/logo.webp'
import ToggleColorMode from "./ToggleColorMode"


const NavBar = () => {
    return (
        // hstack is a flex div in chakra with flex-direction: column
        <HStack justifyContent='space-between' padding='15px'>
            <Image src={logo} boxSize='60px' />
            <ToggleColorMode />
        </HStack>
    )
}

export default NavBar