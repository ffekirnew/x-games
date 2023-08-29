import { GameQuery } from '../../App'
import { Game } from '../services/game-service'
import gameService from '../services/game-service'
import { FetchResponse } from '../services/api-client'
import { useInfiniteQuery } from '@tanstack/react-query'

function useGames(gameQuery: GameQuery) {
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) => gameService.getAll({ params: {
      page: pageParam,
      genres: gameQuery?.genre?.id,
      parent_platforms: gameQuery?.platform?.id,
      ordering: gameQuery?.ordering?.value,
      search: gameQuery?.searchQuery
    }}),
    staleTime: 10 * 60 * 1000, // 10 minutes
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next !== null ? allPages.length + 1 : undefined;
    }
  })
}

export default useGames