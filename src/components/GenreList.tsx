import { Button, HStack, Image, List, ListItem, Skeleton, SkeletonText, Text } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-crop-url';

interface Props {
  selectedGenre: Genre | null
  onSelectGenre: (genre: Genre) => void
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres()
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

  return <List>
    { isLoading && skeletons.map(skeleton => <ListItem key={skeleton} paddingY={'5px'}>
      <HStack>
        <Skeleton boxSize={'32px'} borderRadius={'10px'}/>
        <SkeletonText fontSize={'lg'} noOfLines={1} skeletonHeight={'3'} width={20}/>
      </HStack> 
    </ListItem>) }

    { data.map((genre: Genre) => {
      console.log(selectedGenre?.id)
      return <ListItem key={genre.id} paddingY={'5px'}>
        <HStack>
          <Image src={ getCroppedImageUrl(genre.image_background) } boxSize={'32px'} borderRadius={'10px'} />
          <Button fontSize={'lg'} fontWeight={selectedGenre?.id == genre.id ? 'bold' : 'normal'} variant={'link'} onClick={() => onSelectGenre(genre)}>{ genre.name }</Button>

        </HStack>
      </ListItem>})
    }

  </List>
}

export default GenreList
