import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import GamePlatformIconsList from './GamePlatformIconsList'
import GameCriticBadge from './GameCriticBadge'
import getCroppedImageUrl from '../routing/services/image-crop-url'
import { Game } from '../routing/services/game-service'

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  return <Card borderRadius={15}>
    <Image src={getCroppedImageUrl(game.background_image)} objectFit={'cover'}/>
    <CardBody>
      <HStack justifyContent={'space-between'}>
        <GamePlatformIconsList platforms={game.parent_platforms.map(p => p.platform)} />
        <GameCriticBadge metacritic={game.metacritic} />
      </HStack>
      <Heading fontSize={'2xl'}>{game.name}</Heading>
    </CardBody>
  </Card>
}

export default GameCard
