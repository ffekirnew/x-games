import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GenreList from './components/GenreList'
import { useState } from 'react'
import PlatformMenu from './components/PlatformMenu'
import SortSelector from './components/SortSelector'
import GameHeading from './components/GameHeading'
import { Genre } from './routing/services/genre-service'
import { Platform } from './routing/services/platform-service'

import './index.css'
import { Ordering } from './routing/services/game-service'
import Games from './components/Games'

export interface GameQuery {
  genre: Genre | null
  platform: Platform | null
  ordering: Ordering | null
  searchQuery: string | null
  page: number | null
}

function App() {
  const [ gameQuery, setGameQuery ] = useState<GameQuery>({
    genre: null,
    platform: null,
    ordering: null,
    searchQuery: null,
    page: 1
  })

  return (<Grid 
    templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}
    templateColumns={{
      base: "1fr",
      lg: "200px 1fr"
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
      <GameHeading gameQuery={gameQuery} />
      <HStack spacing={2} marginBottom={5}>
        <PlatformMenu  onSelectPlatform={(platform: Platform) => setGameQuery({ ...gameQuery, platform })} selectedPlatform={gameQuery.platform} />
        <SortSelector selectedOrdering={gameQuery.ordering} onSelectOrdering={(ordering: Ordering) => setGameQuery({ ...gameQuery, ordering }) } />
      </HStack>
      <Games gameQuery={gameQuery}/>
    </GridItem>
  </Grid>)
}

export default App
