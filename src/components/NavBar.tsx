import { HStack, Image, Text } from "@chakra-ui/react"
import logo from '../assets/logo.webp'


const NavBar = () => {
    return (
        // hstack is a flex div in chakra with flex-direction: column
        <HStack>
            <Image src={logo} boxSize='60px' />
            <Text>Navbar</Text>
        </HStack>
    )
}

export default NavBar