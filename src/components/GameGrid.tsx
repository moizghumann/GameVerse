import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";


const GameGrid = () => {
    // curly braces because it got imported like that. its a custom hook. check useGames.ts file
    const { games, error } = useGames();
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} gap={7} padding={5} >
                {games.map(game => <GameCard key={game.id} game={game} />)}
            </SimpleGrid>
            {console.log(games)}
        </>
    )
}

export default GameGrid