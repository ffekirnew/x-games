import { HStack, Image, Text } from '@chakra-ui/react'
import logoDark from '../assets/logo-dark.svg'

const NavBar = () => {
  return <HStack>
    <Image src={logoDark} />
    <Text>GameHub</Text>
  </HStack>
}

export default NavBar
