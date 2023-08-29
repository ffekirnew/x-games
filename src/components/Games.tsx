import { Button, SimpleGrid, Spinner, Text } from '@chakra-ui/react'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import GameCardContainer from './GameCardContainer'
import { GameQuery } from '../App'
import useGames from '../routing/hooks/useGames'
import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'


interface Props {
  gameQuery: GameQuery
}
const Games = ({ gameQuery }: Props) => {
  const { data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGames(gameQuery)
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  if (error)
    return <Text>{error.message}</Text>

  const fetchedGamesCount = data?.pages?.reduce((total, page) => total + page?.results.length, 0)  
  return (<>
    <InfiniteScroll
      dataLength={fetchedGamesCount || 0}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<Spinner />} >
      <SimpleGrid spacing={6} columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} paddingY={4}>
        { isLoading && skeletons.map(skeleton => <GameCardContainer key={skeleton}><GameCardSkeleton/></GameCardContainer>)}
        { data?.pages?.map((page, index) => <React.Fragment key={index}>
          {page?.results.map((game) => <GameCardContainer key={game.id}><GameCard game={game}></GameCard></GameCardContainer>)}
        </React.Fragment>) }
      </SimpleGrid>
    </InfiniteScroll>
  </>)
}

export default Games