import { Box, Text } from '@chakra-ui/react'
import React from 'react'
interface MyComponentProps {
  size: string
  sizeData: number | undefined
}
const PokemonSizeInfo: React.FC<MyComponentProps> = ({ size, sizeData }) => {
  return (
    <Box textAlign={'center'}>
      <Text fontSize={14} opacity={0.5}>{size}</Text>
      <Text as='b' fontSize={14} >{sizeData as number / 10}{size === 'Wight' ? "kg" : 'ft'}</Text>
    </Box>)
}

export default PokemonSizeInfo