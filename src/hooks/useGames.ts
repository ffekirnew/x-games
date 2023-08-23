import useData from './useData';
import { Genre } from './useGenres';
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

function useGames(genre: Genre | null, platform: Platform | null) {
  // , { params: { platforms: platform?.id } }, [ platform?.id ]
  return useData<Game>('/games', { params: { genres: genre?.id, platforms: platform?.id } }, [ genre?.id, platform?.id ])
}

export default useGames
