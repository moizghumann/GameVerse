import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react'
import { useState } from 'react'
import GameGrid from './components/GameGrid'
import GameHeading from './components/GameHeading'
import GenreSideBar from './components/GenreSideBar'
import NavBar from './components/NavBar'
import PlatformFilter from './components/PlatformFilter'
import SortSelector from './components/SortSelector'
import { Platform } from './hooks/useGames'
import { Genres } from './hooks/useGenre'

// query object in order to refactor the code
export interface GameQuery {
  genre: Genres | null;
  platform: Platform | null;
  sortOrder: string;
  search: string;
}

const App = () => {

  // By initializing gameQuery' initial state value as an empty object ({}), we ensure that gameQuery starts with default values of null for both genre and platform properties.
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    // "" is a row
    // "a b c " a b c are columns 
    <Grid templateAreas={{
      base: `"nav" "main"`,           // for mobile
      lg: `"nav nav" "aside main"`    // for 1280px viwpoint and higher
    }}
      templateColumns={{
        base: '1fr',
        lg: '215px 1fr'
      }}
      gap={1}>
      <GridItem area='nav'>
        <NavBar onSearch={(search) => setGameQuery({ ...gameQuery, search })} />
      </GridItem>
      {/* s The Show component controls the visibility of its children based on the screen size */}
      <Show above='lg'>
        <GridItem area='aside' bg='#242C39' borderRadius={10} padding={4}>
          {/* getting data as prop from GenreSideBar to pass it as a prop to GameGrid to show only the selected GameCards by configuring the api request */}
          <GenreSideBar selectedGenre={gameQuery.genre} onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <Box paddingLeft={'20px'}>

          <GameHeading gameQuery={gameQuery} />

          {/* 
            1. onSelectedPlatform gets the value of selected platform from platformFilter function and updates the state thru a callback function
            2. now we need to send the updated state back to platformFilter function to show the selected platform, so we pass the state gameQuery.platform in selectedPlatform      
        */}
          <Flex marginBottom={2}>
            <PlatformFilter selectedPlatform={gameQuery.platform} onSelectedPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />
            <Box marginLeft={4}>
              <SortSelector sortOrder={gameQuery.sortOrder} setSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
            </Box>
          </Flex>
        </Box>

        {/* 
        1. destruction here allows to pass individual properties of the gameQuery object as separate props to the GameGrid component.
        2. spreading it as {...gameQuery} will result in two separate props being passed to the GameGrid component: genre={gameQuery.genre} and platform={gameQuery.platform}
        3. This can be useful if the GameGrid component expects these properties as separate props and accesses them individually within its implementation. It allows for a more concise and readable way of passing multiple props from an object.
         */}
        <GameGrid {...gameQuery} />
      </GridItem>
    </Grid>

  )
}

export default App