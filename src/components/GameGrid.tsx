import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { Genres } from "../hooks/useGenre";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Prop {
    selectedGenre: Genres | null;
}

const GameGrid = ({ selectedGenre }: Prop) => {
    // curly braces because it got imported like that. its a custom hook. check useGames.ts file
    const { data, error, loading } = useGames(selectedGenre);
    // dummy values for the number of skeletons we want to show during loading
    const skeletons = [1, 2, 3, 4, 5, 6]
    return (
        <>
            {error && <Text>{error}</Text>}
            {/* SimpleGrid interface is used to make grid layouts */}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={6} padding={5}  >
                {loading && skeletons.map(skeleton =>
                    <GameCardContainer key={skeleton} >
                        <GameCardSkeleton />
                    </GameCardContainer>)}


                {data?.map(game =>
                    <GameCardContainer key={game.id} >
                        <GameCard games={game} />
                    </GameCardContainer>)}

            </SimpleGrid>
            {console.log(data)}
        </>
    )
}

export default GameGrid