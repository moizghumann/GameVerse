import { Button, Heading, HStack, Image, List, ListItem } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres'
import getCroppedGameImageUrl from '../services/image-url';
import GenreSideBarSkeleton from './GenreSideBarSkeleton';
import useGameQueryStore from '../state-management/gameQueryStore';


const GenreSideBar = () => {

    const { data, isLoading } = useGenres();
    const skeletons = Array.from({ length: 16 }, (_, index) => index + 1);

    const selectedGenreID = useGameQueryStore(s => s.gameQuery.genreID);
    const updateSelectedGenreID = useGameQueryStore(s => s.updateGenreID)

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
                {isLoading && skeletons.map(skeleton => <ListItem paddingY={2} key={skeleton}>
                    <GenreSideBarSkeleton />
                </ListItem>)}

                {data?.results.map(g =>
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
                                fontWeight={g.id === selectedGenreID ? 'bold' : 'normal'}
                                variant={'link'}
                                onClick={() =>
                                    // updateSelectedGenreID callback function now has fetched genre as its paramter
                                    updateSelectedGenreID(g.id)
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