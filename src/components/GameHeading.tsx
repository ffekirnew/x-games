import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery
}
const GameHeading = ({ gameQuery }: Props) => {
  return <Heading as={'h1'} fontSize={'5xl'} marginBottom={5}>
    { gameQuery.platform && gameQuery.platform.name[0] + gameQuery.platform.name.slice(1) + " " }
    { gameQuery.genre && gameQuery.genre.name[0] + gameQuery.genre.name.slice(1) + " " }
    Games
  </Heading>
}

export default GameHeading
