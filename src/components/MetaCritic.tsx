import { Badge } from '@chakra-ui/react';

interface Prop {
    critic: number;
}

const MetaCritic = ({ critic }: Prop) => {

    let color: string = critic > 90 ? 'green' : critic > 75 ? 'yellow' : critic > 60 ? 'blue' : 'red'

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