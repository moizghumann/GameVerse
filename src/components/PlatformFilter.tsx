import { Box, Button, Menu, MenuButton, MenuItem, MenuList, Skeleton } from '@chakra-ui/react'
import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import usePlatform from '../hooks/usePlatform';


const PlatformFilter = () => {

    const [toggle, setToggle] = useState(false)
    const { data } = usePlatform()


    return (
        <Box paddingX={'20px'}>
            <Menu>

                <MenuButton as={Button} onClick={() => setToggle(!toggle)}
                    rightIcon={toggle ? <FaChevronUp /> : <FaChevronDown />}>
                    Platform List
                </MenuButton>
                <MenuList>
                    {data && data.map((platform) => <MenuItem
                        key={platform.id}
                    >{platform.name}</MenuItem>)}
                </MenuList>
            </Menu>
        </Box>
    )
}

export default PlatformFilter