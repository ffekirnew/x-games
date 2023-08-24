import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import { Ordering, orderingFields } from "../hooks/useGames"

interface Props {
  selectedOrdering: Ordering | null
  onSelectOrdering: (ordering: Ordering) => void
}

const SortSelector = ({ selectedOrdering, onSelectOrdering }: Props) => {
  return <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDown />}> Order By: { selectedOrdering?.label || 'Relevance'}</MenuButton>
    <MenuList>
      { orderingFields.map((ordering, index) => <MenuItem key={index} onClick={() => onSelectOrdering(ordering)}>{ ordering.label }</MenuItem>) }
    </MenuList>
  </Menu>
}

export default SortSelector
