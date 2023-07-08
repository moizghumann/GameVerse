import { useParams } from "react-router"
import useGame from "../hooks/useGame";
import { Box, Heading, Spinner } from "@chakra-ui/react";
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
            <Box padding={8}>
                {game.name && <Heading>{game.name}</Heading>}
                <Balancer>
                    <ExpandableText>{englishDescription}</ExpandableText>
                </Balancer>
            </Box>
            <GameAttributes games={game} />
            <GameTrailer gameID={parsedID} />
            <GameScreenshots gameID={parsedID} />
        </>
    )
}

export default GameDetails