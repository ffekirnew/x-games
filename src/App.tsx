import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GenreList from './components/GenreList';
import PlatformMenu from './components/PlatformMenu';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';
import './index.css';
import Games from './components/Games';

function App() {
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
      <NavBar />
    </GridItem>

    <Show above='lg'>
      <GridItem area={"aside"} paddingX={5}>
        <GenreList />
      </GridItem>
    </Show>

    <GridItem area={"main"} paddingX={5}>
      <GameHeading />
      <HStack spacing={2} marginBottom={5}>
        <PlatformMenu />
        <SortSelector />
      </HStack>
      <Games />
    </GridItem>
  </Grid>);
}

export default App;
