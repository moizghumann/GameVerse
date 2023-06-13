import { Button, Heading, HStack, Image, List, ListItem } from '@chakra-ui/react';
import useGenre, { Genres } from '../hooks/useGenre'
import getCroppedGameImageUrl from '../services/image-url';
import GenreSideBarSkeleton from './GenreSideBarSkeleton';

interface Prop {
    // callback function property to get selected genre as its paramter
    onSelectedGenre: (genre: Genres) => void;
    selectedGenre: Genres | null;
}

const GenreSideBar = ({ onSelectedGenre, selectedGenre }: Prop) => {

    const { data, loading } = useGenre();
    const skeletons = Array.from({ length: 16 }, (_, index) => index + 1);

    return (
        <>
            <Heading
                marginBottom={2}
                fontSize={'2xl'}
                paddingTop={3.5}

            >
                Genres
            </Heading>

            <List>
                {loading && skeletons.map(skeleton => <ListItem paddingY={2} key={skeleton}>
                    <GenreSideBarSkeleton />
                </ListItem>)}

                {data?.map(g =>
                    <ListItem paddingY={1.5} key={g.id}>

                        <HStack>
                            <Image
                                // image will be scaled to fit container, while preserving its aspect ratio 
                                objectFit='cover'
                                boxSize={'35px'}
                                borderRadius={10}
                                src={getCroppedGameImageUrl(g.image_background)}
                            />

                            <Button fontSize={'17px'}
                                whiteSpace='normal'
                                textAlign='start'
                                fontWeight={g.id === selectedGenre?.id ? 'bold' : 'normal'}
                                variant={'link'}
                                onClick={() =>
                                    // onSelectedGenre callback function now has fetched genre as its paramter
                                    onSelectedGenre(g)
                                }>
                                {g.name}
                            </Button>
                        </HStack>

                    </ListItem>)}
            </List>
        </>
    )
}

export default GenreSideBar