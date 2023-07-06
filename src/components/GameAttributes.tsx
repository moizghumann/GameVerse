import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import MetaCritic from './MetaCritic'
import { Game } from '../entities/Game'

interface Props {
    games: Game;
}

const GameAttributes = ({ games }: Props) => {
    return (
        <SimpleGrid padding={8} columns={2} spacing={3}>
            <Box height='160px'>
                <Text color={'gray.600'} paddingBottom={1} fontWeight={'semibold'}>Platforms</Text>
                {games.parent_platforms.map(p =>
                    <Text key={p.platform.id}>
                        {p.platform.name}
                    </Text>)}
            </Box>
            <Box height='160px'>
                <Text color={'gray.600'} paddingBottom={1} fontWeight={'semibold'}>MetaScore</Text>
                <MetaCritic critic={games.metacritic} />
            </Box>
            <Box height='160px'>
                <Text color={'gray.600'} paddingBottom={1} fontWeight={'semibold'}>Genres</Text>
                {games.genres.map(g => <Text key={g.id}>{g.name}</Text>)}
            </Box>
            <Box height='160px'>
                <Text color={'gray.600'} paddingBottom={1} fontWeight={'semibold'}>Publishers</Text>
                <Text>{games.publishers.map(p => <Text key={p.id}>{p.name}</Text>)}</Text>
            </Box>

        </SimpleGrid>
    )
}

export default GameAttributes