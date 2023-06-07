import { Grid, GridItem, Show } from '@chakra-ui/react'
import GameGrid from './components/GameGrid'
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
        <GridItem area='aside' bg='coral'>
          aside
        </GridItem>
      </Show>
      <GridItem area='main' bg='dodgerblue'>
        <GameGrid />
      </GridItem>
    </Grid>

  )
}

export default App