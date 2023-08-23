import useData from './useData';
import { Genre } from './useGenres';

export interface Platform {
  id: number
  slug: string
  name: string
}

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

function useGames(genre: Genre | null) {
  return useData<Game>('/games', { params: { genres: genre?.id } }, [ genre?.id ])
}

export default useGames
