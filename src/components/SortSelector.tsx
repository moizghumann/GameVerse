import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { FaChevronDown } from "react-icons/fa"

interface Prop {
    setSortOrder: (sortOrder: string) => void;
    sortOrder: string;
}

const SortSelector = ({ setSortOrder, sortOrder }: Prop) => {

    const sortOrders = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Date Added' },
        { value: 'name', label: 'Name' },
        { value: '-released', label: 'Release Date' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Average Rating' }
    ];

    const currentOrder = sortOrders.find(order => order.value === sortOrder)
    console.log(currentOrder)

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<FaChevronDown />}>
                Order by: {currentOrder?.label || 'Relevance'}
            </MenuButton>
            <MenuList>
                {sortOrders.map(order => <MenuItem key={order.value} value={order.value} onClick={() => setSortOrder(order.value)}>{order.label}</MenuItem>)}
            </MenuList>

        </Menu>
    )
}

export default SortSelector