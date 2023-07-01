import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import useGameQueryStore from "../state-management/gameQueryStore";


const SortSelector = () => {

    const [toggle, setToggle] = useState(false);
    const sortOrder = useGameQueryStore(s => s.gameQuery.sortOrder)
    const setSortOrder = useGameQueryStore(s => s.updateSortOrder)

    const sortOrders = [
        { value: '', label: 'Relevance' },
        { value: '-rating', label: 'Popularity' },
        { value: '-released', label: 'Latest' },
        { value: '-metacritic', label: 'Rating' },
        { value: 'name', label: 'Name' },
        { value: '-added', label: 'Date Added' }
    ];

    const currentOrder = sortOrders.find(order => order.value === sortOrder)
    console.log(currentOrder)

    return (
        <Menu>
            <MenuButton as={Button} onClick={() => setToggle(!toggle)} rightIcon={toggle ? <FaChevronUp /> : <FaChevronDown />}>
                Order by: {currentOrder?.label || 'Relevance'}
            </MenuButton>
            <MenuList>
                {sortOrders.map(order => <MenuItem key={order.value}
                    value={order.value}
                    onClick={() => {
                        setSortOrder(order.value);
                        setToggle(!toggle)
                    }}>
                    {order.label}
                </MenuItem>)}
            </MenuList>

        </Menu >
    )
}

export default SortSelector