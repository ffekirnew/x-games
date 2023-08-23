import { FaWindows, FaAndroid, FaApple, FaPlaystation, FaXbox, FaLinux } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { BsGlobe } from 'react-icons/bs'
import { SiNintendo } from 'react-icons/si'

import { HStack, Icon } from "@chakra-ui/react"
import { Platform } from "../hooks/useGames"
import { IconType } from 'react-icons'

interface Props {
  platforms: Platform[]
}

const iconsMap: { [key: string]: IconType } = {
  pc: FaWindows,
  mac: FaApple,
  linux: FaLinux,

  playstation: FaPlaystation,
  xbox: FaXbox,
  nintendo: SiNintendo,

  android: FaAndroid,
  iphone: MdPhoneIphone,

  web: BsGlobe
}

const GamePlatformIconsList = ({ platforms }: Props) => {
  return <HStack marginY={2}>
    { platforms.map(platform => <Icon as={iconsMap[platform.slug]} color='gray.500' />) }
  </HStack>
}

export default GamePlatformIconsList
