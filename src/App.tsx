import { Grid, GridItem, Show } from '@chakra-ui/react'

const App = () => {
  return (
    // "" is a row
    // "a b c " a b c are coulmns
    <Grid templateAreas={{
      base: `"nav" "main"`,           // for mobile
      lg: `"nav nav" "aside main"`    // for 1280px viwpoint and higher
    }} gap={1}>
      <GridItem area='nav' bg='yellow'>
        nav
      </GridItem>
      {/* s The Show component controls the visibility of its children based on the screen size */}
      <Show above='lg'>
        <GridItem area='aside' bg='coral'>
          aside
        </GridItem>
      </Show>
      <GridItem area='main' bg='dodgerblue'>
        main
      </GridItem>
    </Grid>
  )
}

export default App