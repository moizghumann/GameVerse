import { Grid, GridItem, Show } from '@chakra-ui/react'
import { useState } from 'react'
import GameGrid from './components/GameGrid'
import GenreSideBar from './components/GenreSideBar'
import NavBar from './components/NavBar'
import PlatformFilter from './components/PlatformFilter'
import { Platform } from './hooks/useGames'
import { Genres } from './hooks/useGenre'


const App = () => {

  // state hook in parent comp to update the genre state, this state will be passed to genreSideBar comp and gameGrid comp children so when genreSidebar is clicked, state changes
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

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
          <GenreSideBar selectedGenre={selectedGenre} onSelectedGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <PlatformFilter selectedPlatform={selectedPlatform} onSelectedPlatform={(platform) => setSelectedPlatform(platform)} />
        <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
      </GridItem>
    </Grid>

  )
}

export default App