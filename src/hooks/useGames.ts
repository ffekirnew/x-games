import { GameQuery } from '../App';
import useData from './useData';
import { Platform } from './usePlatforms';

interface PlatformWrapper {
  platform: Platform
}

export interface Game {
  id: number
  name: string
  background_image: string
  parent_platforms: PlatformWrapper[]
  metacritic: number
}

export interface Ordering {
  value: string
  label: string
}

export const orderingFields = [
  { value: 'name', label: 'Name' },
  { value: '-released', label: 'Released Date' },
  { value: '-added', label: 'Added Date' },
  { value: '-created', label: 'Created date' },
  { value: '-updated', label: 'Updated date' },
  { value: 'rating', label: 'Rating' },
  { value: 'metacritic', label: 'Critics' }
]

function useGames(gameQuery: GameQuery) {
  console.log(gameQuery)
  return useData<Game>('/games', {
    params: {
      genres: gameQuery.genre?.id,
      platforms: gameQuery.platform?.id,
      ordering: gameQuery.ordering?.value,
      search: gameQuery.searchQuery
    }
  }, [ gameQuery ])
}

export default useGames
