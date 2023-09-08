import { HStack, Image } from '@chakra-ui/react';
import logoWhite from '../assets/logo-light.svg';

import ColorModeSwitch from './ColorModeSwitch';
import SearchBox from './SearchBox';

const NavBar = () => {
  return <HStack height={'80px'} spacing={5} paddingX={5}>
    <Image src={logoWhite} boxSize={'40px'} borderRadius={5}/>
    <SearchBox />
    <ColorModeSwitch />
  </HStack>
}

export default NavBar;
