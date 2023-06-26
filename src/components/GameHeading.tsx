import { Heading } from "@chakra-ui/layout"
import { GameQuery } from "../App"
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";


interface Prop {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Prop) => {

  const genres = useGenre(gameQuery.genreID)
  const platforms = usePlatform(gameQuery.platformID);

  const heading = `${platforms?.name || ''} ${genres?.name || ''} Games`

  return (
    <Heading as={'h1'} fontSize={'50px'} textTransform={'uppercase'} marginBottom={4}>{heading}</Heading>
  )
}

export default GameHeading