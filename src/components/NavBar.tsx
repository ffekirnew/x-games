import { HStack, Image } from '@chakra-ui/react'
import logoDark from '../assets/logo-dark.svg'
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
  return <HStack justifyItems={'space-between'}>
    <Image src={logoDark} />
    <ColorModeSwitch />
  </HStack>
}

export default NavBar
