import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots"

interface Prop {
    gameID: number;
}

const GameScreenshots = ({ gameID }: Prop) => {
    const { data } = useScreenshots(gameID)

    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
            {data?.results.map(file => <Image src={file.image} />)}
        </SimpleGrid>
    )
}

export default GameScreenshots