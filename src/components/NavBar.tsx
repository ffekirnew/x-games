import { ColorModeScript, HStack, Image, Text } from '@chakra-ui/react'
import logoDark from '../assets/logo-dark.svg'
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
  return <HStack>
    <Image src={logoDark} />
    <ColorModeSwitch />
  </HStack>
}

export default NavBar
