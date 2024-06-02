import { Flex, Image } from '@chakra-ui/react'
import React from 'react'
interface MyComponentProps {
  src: string | undefined
  name: string | undefined
}
const PokemonImage: React.FC<MyComponentProps> = ({ src, name }) => {
  return (
    <Flex height={'150px'} width={'150px'} background={'linear-gradient(to bottom,rgba(214, 214, 214, 0.3),rgba(77, 77, 77, 0.1))'} boxShadow={'0 0 10px 10px rgba(202, 201, 201, 0.05)'} borderRadius={'50%'} justifyContent={'center'} alignItems={'center'}>
      < Image
        maxW={'120px'}
        height={'120px'}
        objectFit='contain'
        src={src}
        alt={name}
      />
    </Flex>
  )
}

export default PokemonImage