import ApiClient from './api-client'
import { Platform } from './platform-service'

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

export default new ApiClient<Game>("/games")
