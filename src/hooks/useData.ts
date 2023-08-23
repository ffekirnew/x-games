import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface FetchResponse<T> {
  count: number
  next: string
  previous: string
  results: T[]
}

function useData<T>(endpoint: string) {
  const [data, setData] = useState<T[]>([])
  const [error, setError] = useState('')
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    const controller = new AbortController()
    apiClient.get<FetchResponse<T>>(endpoint, { signal: controller.signal })
    .then(response => {
        setData(response.data.results)
        setLoading(false)
      })
    .catch(error => {
        if (error instanceof CanceledError) return
        setError(error.message)
        setLoading(false)
      })

    return () => controller.abort()

  }, [])

  return { data, error, isLoading }
}

export default useData
