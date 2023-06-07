import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Games } from "../hooks/useGames"

// importing Games interface in our own interface here
// this makes Cards access all the properties of Games
interface Card {
    game: Games;
}

const GameCard = ({ game }: Card) => {
    return (
        <Card borderRadius={10} overflow='hidden'>
            <Image src={game.background_image} />
            <CardBody>
                <Heading fontSize={"2xl"} >{game.name}</Heading>
            </CardBody>
        </Card>
    )
}

export default GameCard