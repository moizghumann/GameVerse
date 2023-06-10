import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useGenre from '../hooks/useGenre'
import getCroppedGameImageUrl from '../services/image-url';




const GenreSideBar = () => {

    const { data } = useGenre();

    return (
        <>
            <List>
                {data?.map(g => <ListItem paddingY={1.5} key={g.id}>
                    <HStack>
                        <Image boxSize={'40px'} borderRadius={10} src={getCroppedGameImageUrl(g.image_background)} />
                        <Text fontSize={'lg'} fontWeight={'medium'} >{g.name}</Text>
                    </HStack>
                </ListItem>)}
            </List>
        </>
    )
}

export default GenreSideBar