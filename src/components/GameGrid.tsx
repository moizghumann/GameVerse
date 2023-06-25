import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React, { useCallback } from "react";
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
    const skeletons = [1, 2, 3, 4, 5, 6];
    if (error) return <Text>{error.message}</Text>;
    console.log('all games:', data)


    const refresh = useCallback(() => {
        // Implement your refresh logic here
        // For example, you can reset the data and fetch the initial page again
        // You might need to modify the useGames hook to provide a function to reset the data
        // This is just a placeholder, replace it with your actual refresh logic
        console.log("Refreshing data...");
    }, []);

    {/* SimpleGrid interface is used to make grid layouts */ }
    return (
        <InfiniteScroll
            dataLength={data?.pages.length || 0}
            next={() => fetchNextPage()}
            hasMore={hasNextPage ? true : false}
            loader={<Spinner size="lg" marginTop={5} marginBottom={5} marginLeft={5} />}
            endMessage={
                <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                </p>
            }
            // below props only if you need pull down functionality
            refreshFunction={refresh}
            pullDownToRefresh
            pullDownToRefreshThreshold={50}
            pullDownToRefreshContent={
                <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
            }
            releaseToRefreshContent={
                <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
            }
        >
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={5} padding={5}>

                {isLoading && skeletons.map((skeleton) =>
                    <GameCardContainer key={skeleton} >
                        <GameCardSkeleton />
                    </GameCardContainer>)}

                {data?.pages.map((page, index) =>
                    <React.Fragment key={index}>
                        {page.results.map(game =>
                            <ZoomComponent>
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