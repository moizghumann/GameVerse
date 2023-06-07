import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";


const GameGrid = () => {
    // curly braces because it got imported like that. its a custom hook. check useGames.ts file
    const { games, error } = useGames();
    return (
        <>
            {error && <Text>{error}</Text>}
            <ul>
                {games.map(game => <li key={game.id}>{game.name}</li>)}
            </ul>
            {console.log(games)}
        </>
    )
}

export default GameGrid