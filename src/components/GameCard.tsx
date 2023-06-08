import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames"
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
        <Card borderRadius={10} overflow='hidden'>
            <Image src={game.background_image} />
            <CardBody>
                <Heading fontSize={"2xl"} >{game.name}</Heading>
                <HStack justifyContent={'space-between'} >
                    {/* always name properties in props acc to data properties in api */}
                    <PlatformsIconList platforms={game.parent_platforms.map(p => p.platform)} />
                    <MetaCritic critic={game.metacritic} />
                </HStack>
            </CardBody>
        </Card>
    )
}

export default GameCard