import { Grid, GridItem, Show } from '@chakra-ui/react'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import NavBar from './components/NavBar'


const App = () => {
  return (
    // "" is a row
    // "a b c " a b c are columns 
    <Grid templateAreas={{
      base: `"nav" "main"`,           // for mobile
      lg: `"nav nav" "aside main"`    // for 1280px viwpoint and higher
    }} gap={1}>
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      {/* s The Show component controls the visibility of its children based on the screen size */}
      <Show above='lg'>
        <GridItem area='aside' bg='#242C39' borderRadius={10}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <GameGrid />
      </GridItem>
    </Grid>

  )
}

export default App