import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'

function App() {
  const [genre, setGenre] = useState<Genre | null>(null)

  const changeFilter = (genre: Genre) => {
    setGenre(genre)
  }

  return (<Grid 
    templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}
    templateColumns={{
      base: "1fr",
      lg: "250px 1fr"
    }}
  >
    <GridItem area={"nav"} boxSize={'60px'} paddingX={5}>
      <NavBar />
    </GridItem>

    <Show above='lg'>
      <GridItem area={"aside"} paddingX={5}>
        <GenreList onSelectGenre={changeFilter}/>
      </GridItem>
    </Show>

    <GridItem area={"main"}>
      <GameGrid genre={genre} />
    </GridItem>
  </Grid>)
}

export default App
