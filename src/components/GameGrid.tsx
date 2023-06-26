import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import ZoomComponent from "./ZoomComponent";



const GameGrid = (gameQuery: GameQuery) => {
    // curly braces because it got imported like that. its a custom hook. check useGames.ts file
    const { data, isLoading, error, fetchNextPage, hasNextPage } = useGames(gameQuery);
    // dummy values for the number of skeletons we want to show during loading
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    if (error) return <Text>{error.message}</Text>;
    console.log('all games:', data)

    {/* SimpleGrid interface is used to make grid layouts */ }
    return (
        <InfiniteScroll
            dataLength={data?.pages.length || 0}
            next={() => fetchNextPage()}
            hasMore={hasNextPage ? true : false}
            loader={<Spinner size="lg" marginTop={5} marginBottom={5} marginLeft={5} />}
        >
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={5} padding={5}>

                {isLoading && skeletons.map((skeleton) =>
                    <GameCardContainer key={skeleton} >
                        <GameCardSkeleton />
                    </GameCardContainer>)}

                {data?.pages.map((page, index) =>
                    <React.Fragment key={index}>
                        {page.results.map((game, index) =>
                            <ZoomComponent key={index}>
                                <GameCardContainer key={game.id} >
                                    <GameCard games={game} />
                                </GameCardContainer>
                            </ZoomComponent>
                        )}
                    </React.Fragment>
                )}

            </SimpleGrid>
            {/* {hasNextPage && (
                <Button
                    size={'lg'}
                    marginTop={6}
                    marginBottom={10}
                    variant='solid'
                    onClick={() => fetchNextPage()}
                    disabled={isFetchingNextPage}>
                    {isFetchingNextPage ? 'Loading...' : hasNextPage ? 'Load More' : 'Woops! That\'s it'}
                </Button>
            )} */}
        </InfiniteScroll>
    )
}

export default GameGrid