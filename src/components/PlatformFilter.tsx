import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import usePlatforms from '../hooks/usePlatforms';
import useGameQueryStore from '../state-management/gameQueryStore';


const PlatformFilter = () => {

    const [toggle, setToggle] = useState(false)
    const { data: platforms, error } = usePlatforms()

    const selectedPlatformID = useGameQueryStore(s => s.gameQuery.platformID)
    const onSelectedPlatform = useGameQueryStore(s => s.updatePlatformID)

    const selectedPlatform = platforms?.results.find(p => p.id === selectedPlatformID)
    const current = selectedPlatform?.name

    if (error) return null;

    return (
        <Menu>
            <MenuButton as={Button} onClick={() => setToggle(!toggle)}
                rightIcon={toggle ? <FaChevronUp /> : <FaChevronDown />}>
                {current || 'Platform'}
            </MenuButton>
            <MenuList>
                {platforms?.results.map((platform) => <MenuItem
                    key={platform.id}
                    onClick={() => { onSelectedPlatform(platform.id); setToggle(!toggle) }}

                >{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default PlatformFilter