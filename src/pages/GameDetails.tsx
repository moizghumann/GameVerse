import { useParams } from "react-router"
import useGame from "../hooks/useGame";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";

const GameDetails = () => {

    const { id } = useParams();
    const { data: game, isLoading, error } = useGame(id!);

    console.log(game?.name)

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
                <Text paddingTop={5}>{englishDescription}</Text>
            </Box>
        </>
    )
}

export default GameDetails