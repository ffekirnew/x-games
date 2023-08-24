import { HStack, Image } from '@chakra-ui/react'
import logoDark from '../assets/logo-dark.svg'
import logoWhite from '../assets/logo-light.svg'

import ColorModeSwitch from './ColorModeSwitch'
import SearchBox from './SearchBox'

const NavBar = () => {
  return <HStack position={'sticky'} top={'0'} width={'100%'} height={'60px'} alignItems={'center'}>
    <Image src={logoWhite} boxSize={'40px'} borderRadius={5}/>
    <SearchBox />
    <ColorModeSwitch />
  </HStack>
}

export default NavBar
