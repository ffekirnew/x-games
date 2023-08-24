import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import PlatformMenu from './components/PlatformMenu'
import { Platform } from './hooks/usePlatforms'

export interface GameQuery {
  genre: Genre | null
  platform: Platform | null
}

function App() {
  const [ gameQuery, setGameQuery ] = useState<GameQuery>({
    genre: null,
    platform: null
  })

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
        <GenreList onSelectGenre={(genre: Genre) => setGameQuery({...gameQuery, genre})} selectedGenre={gameQuery.genre}/>
      </GridItem>
    </Show>

    <GridItem area={"main"} paddingX={5}>
      <PlatformMenu  onSelectPlatform={(platform: Platform) => setGameQuery({ ...gameQuery, platform })} selectedPlatform={gameQuery.platform} />
      <GameGrid gameQuery={gameQuery}/>
    </GridItem>
  </Grid>)
}

export default App
