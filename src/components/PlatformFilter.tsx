import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

import usePlatform, { Platform } from '../hooks/usePlatform';

interface Prop {
    onSelectedPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}

const PlatformFilter = ({ onSelectedPlatform, selectedPlatform }: Prop) => {

    const [toggle, setToggle] = useState(false)
    const { data, error } = usePlatform()

    if (error) return null;

    return (
        <Menu>
            <MenuButton as={Button} onClick={() => setToggle(!toggle)}
                rightIcon={toggle ? <FaChevronUp /> : <FaChevronDown />}>
                {selectedPlatform?.name || 'Platform'}
            </MenuButton>
            <MenuList>
                {data?.results.map((platform) => <MenuItem
                    key={platform.id}
                    onClick={() => { onSelectedPlatform(platform); setToggle(!toggle) }}

                >{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default PlatformFilter