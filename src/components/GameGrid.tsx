import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";


const GameGrid = () => {
    // curly braces because it got imported like that. its a custom hook. check useGames.ts file
    const { data, error, loading } = useGames();
    // dummy values for the number of skeletons we want to show during loading
    const skeletons = [1, 2, 3, 4, 5, 6]
    return (
        <>
            {error && <Text>{error}</Text>}
            {/* SimpleGrid interface is used to make grid layouts */}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={6} padding={5}  >
                {loading && skeletons.map(skeleton =>
                    <GameCardContainer>
                        <GameCardSkeleton key={skeleton} />
                    </GameCardContainer>)}


                {data?.map(game =>
                    <GameCardContainer>
                        <GameCard key={game.id} games={game} />
                    </GameCardContainer>)}

            </SimpleGrid>
            {console.log(data)}
        </>
    )
}

export default GameGrid