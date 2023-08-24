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

function useGames(gameQuery: GameQuery) {
  return useData<Game>('/games', { params: gameQuery }, [ gameQuery ])
}

export default useGames
