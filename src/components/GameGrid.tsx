import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import GameCardContainer from './GameCardContainer'


const GameGrid = () => {
  const { data, error, isLoading } = useGames()
  const skeletons = [1, 2, 3, 4, 5, 6]
  
  return (<>
    { error && <Text>{error}</Text> }
    <SimpleGrid spacing={10} columns={{ sm: 1, md: 2, lg: 3 }} padding={10}>
      { !isLoading && data.map((game) => <GameCardContainer><GameCard key={game.id} game={game}></GameCard></GameCardContainer>)}
      { isLoading &&  skeletons.map(skeleton => <GameCardContainer><GameCardSkeleton key={skeleton}/></GameCardContainer>)}
    </SimpleGrid>
  </>)
}

export default GameGrid
