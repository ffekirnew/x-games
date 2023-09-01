import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatforms from "../routing/hooks/usePlatforms"
import usePlatform from "../routing/hooks/usePlatform"

interface Props {
  selectedPlatformId?: number
  onSelectPlatform: (platform_id: number) => void
}

const PlatformMenu = ({ selectedPlatformId, onSelectPlatform }: Props) => {
  const { data } = usePlatforms() 

  return <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDown />}>{ usePlatform(selectedPlatformId) || 'Platforms'}</MenuButton>
    <MenuList>
      { data?.results?.map(platform => <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform.id)}>{ platform.name }</MenuItem>) }
    </MenuList>
  </Menu>
}

export default PlatformMenu
