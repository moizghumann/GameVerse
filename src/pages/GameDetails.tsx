import { useParams } from "react-router"
import useGame from "../hooks/useGame";
import { Box, GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import extractEnglishDescription from "../functions/extractEnglishText";
import GameAttributes from "../components/GameAttributes";
import { Balancer } from "react-wrap-balancer";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";


const GameDetails = () => {

    const { id } = useParams();
    const { data: game, isLoading, error } = useGame(id!);
    const parsedID = parseInt(id!);

    if (isLoading) return <Spinner />;
    if (error || !game) throw error;

    // Extract the English description
    const englishDescription = extractEnglishDescription(game!.description_raw);

    return (
        <>
            <SimpleGrid columns={{ base: 1, md: 2 }} paddingRight={8} paddingLeft={8} paddingTop={5}>
                <GridItem>
                    {game.name && <Heading>{game.name}</Heading>}

                    <ExpandableText>{englishDescription}</ExpandableText>

                    <GameAttributes games={game} />
                </GridItem>

                <GridItem>
                    <GameTrailer gameID={parsedID} />
                    <GameScreenshots gameID={parsedID} />
                </GridItem>
            </SimpleGrid>
        </>
    )
}

export default GameDetails