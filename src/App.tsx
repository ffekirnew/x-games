import { Button, ButtonGroup, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import PlatformMenu from './components/PlatformMenu'
import { Platform } from './hooks/usePlatforms'
import SortSelector from './components/SortSelector'

export interface GameQuery {
  genre: Genre | null
  platform: Platform | null
  ordering: Ordering | null
}

function App() {
  const [ gameQuery, setGameQuery ] = useState<GameQuery>({
    genre: null,
    platform: null,
    ordering: null
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
      <HStack spacing={2} marginBottom={5}>
      <PlatformMenu  onSelectPlatform={(platform: Platform) => setGameQuery({ ...gameQuery, platform })} selectedPlatform={gameQuery.platform} />
        <SortSelector selectedOrdering={gameQuery.ordering} onSelectOrdering={(ordering: string) => setGameQuery({ ...gameQuery, ordering }) } />
      </HStack>
      <GameGrid gameQuery={gameQuery}/>
    </GridItem>
  </Grid>)
}

export default App
