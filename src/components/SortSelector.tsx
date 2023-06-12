import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { FaChevronDown } from "react-icons/fa"

const SortSelector = () => {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<FaChevronDown />}>
                Order by: Relevence
            </MenuButton>
            <MenuList>

            </MenuList>
        </Menu>
    )
}

export default SortSelector