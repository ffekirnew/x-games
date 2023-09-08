import { useParams } from "react-router-dom"
import useGameDetail from "../shared/hooks/useGameDetail";
import { Box, Text, Heading, Spinner } from "@chakra-ui/react";

const GameDetailPage = () => {
  const params = useParams();
  const { data: game, error, isLoading } = useGameDetail(params.slug);

  if (isLoading) return <Spinner />

  if (error || !game) throw error;

  return (<Box padding={5}>
    <Heading>{ game.name }</Heading>
    <Text>{ game.description_raw }</Text>
  </Box>);
}

export default GameDetailPage;
