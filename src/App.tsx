import { Grid, GridItem } from '@chakra-ui/react'

const App = () => {
  return (
    // "" is a row
    // "a b c " a b c are coulmns
    <Grid templateAreas={`"nav nav" "aside main"`} gap={1}>
      <GridItem area='nav' bg='yellow'>
        Yellow Box
      </GridItem>
      <GridItem area='aside' bg='coral'>
        Red Box
      </GridItem>
      <GridItem area='main' bg='dodgerblue'>
        Red Box
      </GridItem>
    </Grid>
  )
}

export default App