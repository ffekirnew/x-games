import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import GameCardContainer from './GameCardContainer'
import { Genre } from '../hooks/useGenres'


interface Props {
  genre: Genre | null
}
const GameGrid = ({ genre }: Props) => {
  const { data, error, isLoading } = useGames(genre)
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  
  return (<>
    { error && <Text>{error}</Text> }
    <SimpleGrid spacing={3} columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} paddingX={5}>
      { !isLoading && data.map((game) => <GameCardContainer key={game.id}><GameCard game={game}></GameCard></GameCardContainer>)}
      { isLoading &&  skeletons.map(skeleton => <GameCardContainer key={skeleton}><GameCardSkeleton/></GameCardContainer>)}
    </SimpleGrid>
  </>)
}

export default GameGrid
