import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

export interface Genre {
  id: number
  name: string
  slug: string
  games_count: number
  image_background: string
}

interface Page {
  // count: number
  // next: string
  // previous: string
  results: Genre[]
}

function useGenres() {
  const [genres, setGenres] = useState<Genre[]>([])
  const [error, setError] = useState('')
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    const controller = new AbortController()
    apiClient.get<Page>('/genres', { signal: controller.signal })
    .then(response => {
        setGenres(response.data.results)
        setLoading(false)
      })
    .catch(error => {
        if (error instanceof CanceledError) return
        setError(error.message)
        setLoading(false)
      })

    return () => controller.abort()

  }, [])

  return { genres, error, isLoading }
}

export default useGenres
