import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react'

interface Props {
    children: string;
}

const ExpandableText = ({ children }: Props) => {
    const [isExpanded, setIsExpanded] = useState(false);

    if (!children) return null;
    const maxLength: number = 291;
    const dynamicText = isExpanded ? children : `${children.slice(0, maxLength)}... `;

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    }
    return (
        <>
            <Text paddingTop={5}>
                {dynamicText}
                <Button
                    marginLeft={1}
                    size={'xs'}
                    colorScheme='yellow'
                    fontWeight={'bold'}
                    borderRadius={5}
                    onClick={toggleExpanded}
                >
                    {isExpanded ? 'Show Less' : 'Show More'}
                </Button>
            </Text>

        </>

    )
}

export default ExpandableText