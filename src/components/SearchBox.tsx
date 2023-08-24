import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'
import { BsSearch } from 'react-icons/bs'

const SearchBox = () => {
  return <InputGroup>
    <InputLeftElement children={<BsSearch />}/>
    <Input placeholder='Search Games...' borderRadius={20} variant={'filled'}/>
  </InputGroup> 
  
}

export default SearchBox
