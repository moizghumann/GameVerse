import { useParams } from "react-router"
import useGame from "../hooks/useGame";
import { Box, Heading, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import extractEnglishDescription from "../functions/extractEnglishText";

const GameDetails = () => {

    const { id } = useParams();
    const { data: game, isLoading, error } = useGame(id!);

    if (isLoading) return <Spinner />;
    if (error || !game) throw error;

    // Extract the English description
    const englishDescription = extractEnglishDescription(game!.description_raw);

    return (
        <>
            <Box padding={8}>
                {game.name && <Heading>{game.name}</Heading>}
                <ExpandableText>{englishDescription}</ExpandableText>
            </Box>
        </>
    )
}

export default GameDetails