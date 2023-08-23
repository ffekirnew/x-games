import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'

function App() {
  return (<Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`
  }}>
    <GridItem area={"nav"} boxSize={'60px'}>
      <NavBar />
    </GridItem>

    <Show above='lg'>
      <GridItem area={"aside"}>aside</GridItem>
    </Show>

    <GridItem area={"main"}>
      <GameGrid />
    </GridItem>
  </Grid>)
}

export default App
