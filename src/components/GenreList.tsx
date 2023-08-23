import useGenres, { Genre } from '../hooks/useGenres';

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  return <>{ data.map((genre: Genre) => <li key={genre.id}>{genre.name}</li>) }</>
}

export default GenreList
