import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatforms from "../routing/hooks/usePlatforms"
import { Platform } from "../routing/services/platform-service"

interface Props {
  selectedPlatform: Platform | null
  onSelectPlatform: (platform: Platform) => void
}

const PlatformMenu = ({ selectedPlatform, onSelectPlatform }: Props) => {
  const { data } = usePlatforms()


  return <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDown />}>{ selectedPlatform?.name || 'Platforms'}</MenuButton>
    <MenuList>
      { data?.results?.map(platform => <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)}>{ platform.name }</MenuItem>) }
    </MenuList>
  </Menu>
}

export default PlatformMenu
