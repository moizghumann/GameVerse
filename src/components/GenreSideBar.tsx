import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useGenre from '../hooks/useGenre'
import getCroppedGameImageUrl from '../services/image-url';
import GenreSideBarSkeleton from './GenreSideBarSkeleton';


const GenreSideBar = () => {

    const { data, loading } = useGenre();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

    return (
        <>
            <List>
                {loading && skeletons.map(skeleton => <ListItem paddingY={2} key={skeleton}>
                    <GenreSideBarSkeleton />
                </ListItem>)}
                {data?.map(g => <ListItem paddingY={1.5} key={g.id}>
                    <HStack>
                        <Image boxSize={'35px'} borderRadius={10} src={getCroppedGameImageUrl(g.image_background)} />
                        <Text fontSize={'lg'} fontWeight={'medium'} >{g.name}</Text>
                    </HStack>
                </ListItem>)}
            </List>
        </>
    )
}

export default GenreSideBar