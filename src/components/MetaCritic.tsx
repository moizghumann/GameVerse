import { Badge } from '@chakra-ui/react';

interface Prop {
    critic: number;
}

const MetaCritic = ({ critic }: Prop) => {

    let color: string = '';

    // switch (expression -> critic > 89 -> true)
    switch (true) {
        case critic > 89:
            color = 'green';
            break;
        case critic > 74:
            color = 'yellow';
            break;
        case critic > 59:
            color = 'blue';
            break;
        case critic > 89:
            color = 'red';
            break;
        default:
            break;
    }

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