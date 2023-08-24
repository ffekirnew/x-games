import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import PlatformMenu from './components/PlatformMenu'
import { Platform } from './hooks/usePlatforms'
import SortSelector from './components/SortSelector'
import { Ordering } from './hooks/useGames'
import './index.css'
import SearchBox from './components/SearchBox'

export interface GameQuery {
  genre: Genre | null
  platform: Platform | null
  ordering: Ordering | null
  searchQuery: string | null
}

function App() {
  const [ gameQuery, setGameQuery ] = useState<GameQuery>({
    genre: null,
    platform: null,
    ordering: null,
    searchQuery: null
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
    <GridItem area={"nav"} paddingX={5} marginBottom={5}>
      <NavBar onSubmitSearchQuery={(searchQuery: string) => setGameQuery({ ...gameQuery, searchQuery })}/>
    </GridItem>

    <Show above='lg'>
      <GridItem area={"aside"} paddingX={5}>
        <GenreList onSelectGenre={(genre: Genre) => setGameQuery({...gameQuery, genre})} selectedGenre={gameQuery.genre}/>
      </GridItem>
    </Show>

    <GridItem area={"main"} paddingX={5}>
      <HStack spacing={2} marginBottom={5}>
      <PlatformMenu  onSelectPlatform={(platform: Platform) => setGameQuery({ ...gameQuery, platform })} selectedPlatform={gameQuery.platform} />
        <SortSelector selectedOrdering={gameQuery.ordering} onSelectOrdering={(ordering: Ordering) => setGameQuery({ ...gameQuery, ordering }) } />
      </HStack>
      <GameGrid gameQuery={gameQuery}/>
    </GridItem>
  </Grid>)
}

export default App
