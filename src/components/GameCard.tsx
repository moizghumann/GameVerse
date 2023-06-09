import { Card, CardBody, Heading, HStack, Image, DarkMode } from "@chakra-ui/react";
import { Game } from "../hooks/useGames"
import getCroppedImageUrl from "../services/image-url";
import MetaCritic from "./MetaCritic";
import PlatformsIconList from "./PlatformsIconList";

// importing Games interface in our own interface here
// this makes Cards access all the properties of Games
interface Prop {
    game: Game;
}

const GameCard = ({ game }: Prop) => {
    return (
        // overflow -> css property -> used to control how content that exceeds the size of its container is displayed
        <DarkMode>
            <Card>
                <Image src={getCroppedImageUrl(game.background_image)} />
                <CardBody>
                    <Heading fontSize={"3xl"} >{game.name}</Heading>
                    <HStack marginY={1.5} justifyContent={'space-between'} >
                        {/* always name properties in props acc to data properties in api */}
                        <PlatformsIconList platforms={game.parent_platforms.map(p => p.platform)} />
                        <MetaCritic critic={game.metacritic} />
                    </HStack>
                </CardBody>
            </Card>
        </DarkMode>
    )
}

export default GameCard