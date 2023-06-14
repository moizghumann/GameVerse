import { Box } from "@chakra-ui/react";
import { ReactNode, useState } from "react";

interface Props {
    children: ReactNode;
}

const ZoomComponent = ({ children }: Props) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <Box minWidth={'50px'} margin='0' borderRadius={10} overflow='hidden'
            transition="transform 0.3s"
            transform={isHovered ? "scale(1.06)" : "scale(1)"}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </Box>
    );
};

export default ZoomComponent;
