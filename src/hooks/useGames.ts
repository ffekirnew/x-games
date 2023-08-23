import useData from './useData';

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

function useGames() {
  return useData<Game>('/games')
}

export default useGames
