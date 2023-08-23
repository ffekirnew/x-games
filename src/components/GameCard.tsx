import { Badge, Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import GamePlatformIconsList from './GamePlatformIconsList'
import GameCriticBadge from './GameCriticBadge'
import getCroppedImageUrl from '../services/image-crop-url'

interface GameCardProps {
  game: Game
}

const GameCard = ({ game }: GameCardProps) => {
  return <Card borderRadius={20} overflow={'hidden'}>
    <Image src={getCroppedImageUrl(game.background_image)} />
    <CardBody>
      <Heading fontSize={'2xl'}>{game.name}</Heading>
      <HStack justifyContent={'space-between'}>
        <GamePlatformIconsList platforms={game.parent_platforms.map(p => p.platform)} />
        <GameCriticBadge metacritic={game.metacritic} />
      </HStack>
    </CardBody>
  </Card>
}

export default GameCard
