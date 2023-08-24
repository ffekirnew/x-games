import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import GameCardContainer from './GameCardContainer'
import { GameQuery } from '../App'


interface Props {
  gameQuery: GameQuery
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery)
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  
  return (<>
    { error && <Text>{error}</Text> }
    <SimpleGrid spacing={3} columns={{ sm: 1, md: 2, lg: 3 }} paddingY={4}>
      { !isLoading && data.map((game) => <GameCardContainer key={game.id}><GameCard game={game}></GameCard></GameCardContainer>)}
      { isLoading &&  skeletons.map(skeleton => <GameCardContainer key={skeleton}><GameCardSkeleton/></GameCardContainer>)}
    </SimpleGrid>
  </>)
}

export default GameGrid
