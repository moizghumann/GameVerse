import { Button, HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useGenre, { Genres } from '../hooks/useGenre'
import getCroppedGameImageUrl from '../services/image-url';
import GenreSideBarSkeleton from './GenreSideBarSkeleton';

interface Prop {
    // callback function property to get selected genre as its paramter
    onSelectedGenre: (genre: Genres) => void;
}

const GenreSideBar = ({ onSelectedGenre }: Prop) => {

    const { data, loading } = useGenre();
    const skeletons = Array.from({ length: 16 }, (_, index) => index + 1);

    return (
        <>
            <List>
                {loading && skeletons.map(skeleton => <ListItem paddingY={2} key={skeleton}>
                    <GenreSideBarSkeleton />
                </ListItem>)}
                {data?.map(g => <ListItem paddingY={1.5} key={g.id}>
                    <HStack>
                        <Image boxSize={'35px'} borderRadius={10} src={getCroppedGameImageUrl(g.image_background)} />
                        <Button fontSize={'lg'} fontWeight={'medium'} variant={'link'} wordBreak={'break-word'} onClick={() =>
                            // onSelectedGenre callback function now has fetched genre as its paramter
                            onSelectedGenre(g)} >{g.name}</Button>
                    </HStack>
                </ListItem>)}
            </List>
        </>
    )
}

export default GenreSideBar