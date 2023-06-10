import { Badge } from '@chakra-ui/react';

interface Prop {
    critic: number;
}

const MetaCritic = ({ critic }: Prop) => {

    let color: string = critic > 89 ? 'green' : critic > 74 ? 'yellow' : critic > 59 ? 'blue' : 'red'

    return (
        <Badge fontSize='1.1em'
            paddingX={2}
            paddingY={0.2}
            borderRadius={5}
            colorScheme={color}
        >
            {critic}
        </Badge>
    )
}

export default MetaCritic