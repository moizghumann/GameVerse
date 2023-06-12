import { Grid, GridItem, Show } from '@chakra-ui/react'
import { useState } from 'react'
import GameGrid from './components/GameGrid'
import GenreSideBar from './components/GenreSideBar'
import NavBar from './components/NavBar'
import PlatformFilter from './components/PlatformFilter'
import { Platform } from './hooks/useGames'
import { Genres } from './hooks/useGenre'

// query object in order to refactor the code
export interface GameQuery {
  genre: Genres | null;
  platform: Platform | null;
}

const App = () => {

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
        lg: '200px 1fr'
      }}
      gap={1}>
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      {/* s The Show component controls the visibility of its children based on the screen size */}
      <Show above='lg'>
        <GridItem area='aside' bg='#242C39' borderRadius={10} padding={4} >
          {/* getting data as prop from GenreSideBar to pass it as a prop to GameGrid to show only the selected GameCards by configuring the api request */}
          <GenreSideBar selectedGenre={gameQuery.genre} onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
        </GridItem>
      </Show>
      <GridItem area='main'>
        {/* 
            1. onSelectedPlatform gets the value of selected platform from platformFilter function and updates the state thru a callback function
            2. now we need to send the updated state back to platformFilter function to show the selected platform, so we pass the state gameQuery.platform in selectedPlatform      
        */}
        <PlatformFilter selectedPlatform={gameQuery.platform} onSelectedPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />

        {/* passing the state values to gameGrid component */}
        <GameGrid {...gameQuery} />
      </GridItem>
    </Grid>

  )
}

export default App