import { Card, CardBody, Heading, HStack, Image, DarkMode } from "@chakra-ui/react";
import { Game } from '../entities/Game';
import getCroppedGameImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import MetaCritic from "./MetaCritic";
import PlatformsIconList from "./PlatformsIconList";
import { Link } from "react-router-dom";

// importing Games interface in our own interface here
// this makes Cards access all the properties of Games
interface Prop {
    games: Game;
}

const GameCard = ({ games }: Prop) => {

    return (
        // overflow -> css property -> used to control how content that exceeds the size of its container is displayed
        <DarkMode>
            <Link to={`/games/${games.slug}/${games.id}`}>
                <Card>
                    <Image src={getCroppedGameImageUrl(games.background_image)} />
                    <CardBody paddingTop={3} paddingBottom={5}>
                        <HStack marginY={1.5} justifyContent={'space-between'} >
                            {/* always name properties in props acc to data properties in api */}
                            <PlatformsIconList platforms={games.parent_platforms.map(p => p.platform)} />
                            <MetaCritic critic={games.metacritic} />
                        </HStack>
                        <Heading fontSize={"3xl"} marginTop={0.5}>
                            {games.name}
                            <Emoji rating={games.rating_top} />
                        </Heading>
                    </CardBody>
                </Card>
            </Link>
        </DarkMode>
    )
}

export default GameCard