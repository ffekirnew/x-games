import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface Game {
  id: number
  name: string
}

interface Page {
  count: number
  next: string
  previous: string
  results: Game[]
}

function useGames() {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()
    apiClient.get<Page>('/games', { signal: controller.signal })
    .then(response => setGames(response.data.results))
    .catch(error => {
        if (error instanceof CanceledError) return
        setError(error.message)
      })

    return () => controller.abort()
  }, [])

  return { games, error }
}

export default useGames
