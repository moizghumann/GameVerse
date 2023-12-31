import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"

interface Prop {
    children: ReactNode;
}

const GameCardContainer = ({ children }: Prop) => {
    return (
        <Box minWidth={'50px'} margin='0' borderRadius={10} overflow='hidden' >
            {children}
        </Box>
    )
}

export default GameCardContainer