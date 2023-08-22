import { Grid, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

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

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    apiClient.get<Page>('/games')
    .then(response => setGames(response.data.results))
    .catch(error => setError(error.message))
  }, [])

  return (<>
    { error && <Text>{error}</Text> }
    <Grid>
      <ul>
        { games.map((game: Game) => <li key={game.id}>{game.name}</li>)}
      </ul>
    </Grid>
  </>)
}

export default GameGrid
