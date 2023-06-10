import { Box, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { Platform } from '../hooks/useGames';
import usePlatform from '../hooks/usePlatform';

interface Prop {
    onSelectedPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}

const PlatformFilter = ({ onSelectedPlatform, selectedPlatform }: Prop) => {

    const [toggle, setToggle] = useState(false)
    const { data } = usePlatform()


    return (
        <Box paddingX={'20px'}>
            <Menu>
                <MenuButton as={Button} onClick={() => setToggle(!toggle)}
                    rightIcon={toggle ? <FaChevronUp /> : <FaChevronDown />}>
                    {selectedPlatform?.name || 'Platform'}
                </MenuButton>
                <MenuList>
                    {data && data.map((platform) => <MenuItem
                        key={platform.id}
                        onClick={() => onSelectedPlatform(platform)}
                    >{platform.name}</MenuItem>)}
                </MenuList>
            </Menu>
        </Box>
    )
}

export default PlatformFilter