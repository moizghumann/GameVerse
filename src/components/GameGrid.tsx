import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import ZoomComponent from "./ZoomComponent";



const GameGrid = (gameQuery: GameQuery) => {
    // curly braces because it got imported like that. its a custom hook. check useGames.ts file
    const { data, isLoading, error } = useGames(gameQuery);

    // dummy values for the number of skeletons we want to show during loading
    const skeletons = [1, 2, 3, 4, 5, 6];

    if (error) return <Text>{error.message}</Text>;

    {/* SimpleGrid interface is used to make grid layouts */ }
    return (

        <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 3, xl: 4 }
            } gap={5} padding={5} >
            {isLoading && skeletons.map(skeleton =>
                <GameCardContainer key={skeleton} >
                    <GameCardSkeleton />
                </GameCardContainer>)}


            {
                data?.results.map(game =>
                    <ZoomComponent>
                        <GameCardContainer key={game.id} >
                            <GameCard games={game} />
                        </GameCardContainer>
                    </ZoomComponent>
                )
            }
        </SimpleGrid>
    )
}

export default GameGrid