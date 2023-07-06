import { useParams } from "react-router"
import useGame from "../hooks/useGame";
import { Box, Heading, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";

const GameDetails = () => {

    const { id } = useParams();
    const { data: game, isLoading, error } = useGame(id!);

    if (isLoading) return <Spinner />;
    if (error || !game) throw error;

    const extractEnglishDescription = (descriptionRaw: string): string => {
        const endTag = "Español";
        const end = descriptionRaw.indexOf(endTag);

        if (end !== -1) {
            return descriptionRaw.slice(0, end);
        }
        // If the word "Español" is not found, return the entire raw description as fallback
        return descriptionRaw;
    };

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