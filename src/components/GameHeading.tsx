import { Heading } from "@chakra-ui/layout"
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../state-management/gameQueryStore";


const GameHeading = () => {

  const genreID = useGameQueryStore(s => s.gameQuery.genreID)
  const platformID = useGameQueryStore(s => s.gameQuery.platformID)

  const genres = useGenre(genreID)
  const platforms = usePlatform(platformID);

  const heading = `${platforms?.name || ''} ${genres?.name || ''} Games`

  return (
    <Heading as={'h1'} fontSize={'50px'} textTransform={'uppercase'} marginBottom={4}>{heading}</Heading>
  )
}

export default GameHeading