import { Heading } from "@chakra-ui/react"
import usePlatform from "../routing/hooks/usePlatform";
import useGenre from "../routing/hooks/useGenre";
import useGameQueryStore from "../state-management/stores/gameQueryStore";


const GameHeading = () => { 
  const platformId = useGameQueryStore(s => s.gameQuery.platformId);
  const genreId = useGameQueryStore(s => s.gameQuery.genreId);

  return <Heading as={'h1'} fontSize={'5xl'} marginBottom={5}>
    { platformId && usePlatform(platformId) + " " }
    { genreId && useGenre(genreId) + " " }
    Games
  </Heading>
}

export default GameHeading
