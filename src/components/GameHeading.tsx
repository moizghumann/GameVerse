import { Heading } from "@chakra-ui/layout"
import { GameQuery } from "../App"

interface Prop {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Prop) => {

  const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`

  return (
    <Heading as={'h1'} textTransform={'uppercase'} marginBottom={2}>{heading}</Heading>
  )
}

export default GameHeading