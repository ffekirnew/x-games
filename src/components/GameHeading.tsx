import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App";
import usePlatform from "../routing/hooks/usePlatform";
import useGenre from "../routing/hooks/useGenre";

interface Props {
  gameQuery: GameQuery
}
const GameHeading = ({ gameQuery }: Props) => { 

  return <Heading as={'h1'} fontSize={'5xl'} marginBottom={5}>
    { gameQuery.platformId && usePlatform(gameQuery.platformId) + " " }
    { gameQuery.genreId && useGenre(gameQuery.genreId) + " " }
    Games
  </Heading>
}

export default GameHeading
