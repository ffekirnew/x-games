import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'

interface Props {
  onSubmitSearchQuery: (query: string) => void
}
const SearchBox = ({ onSubmitSearchQuery }: Props) => {
  const searchBoxRef = useRef<HTMLInputElement>(null)
  return <form onSubmit={(event) => {
      event.preventDefault()
      onSubmitSearchQuery(searchBoxRef.current?.value!)
    }}>
    <InputGroup>
      <InputLeftElement children={<BsSearch />}/>
      <Input ref={searchBoxRef} placeholder='Search Games...' borderRadius={20} variant={'filled'}/>
    </InputGroup> 
  </form>
  
}

export default SearchBox
