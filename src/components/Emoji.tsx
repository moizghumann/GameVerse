import { Game } from "../hooks/useGames";
import bullsEye from '../assets/bulseye.png';
import thumbsUp from '../assets/thumbsup.png';
import noEntry from '../assets/noentry.png';
import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";

interface Prop {
    games: Game;
}

const Emoji = ({ games }: Prop) => {
    let emoji = games.metacritic > 89 ? bullsEye : games.metacritic > 74 ? thumbsUp : games.metacritic > 59 ? noEntry : null;
    return (
        <>
            <Box marginTop={2}>
                {emoji && <Image boxSize={'35px'} src={emoji} />}
            </Box>
        </>

    )
}

export default Emoji