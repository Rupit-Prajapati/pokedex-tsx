import { Box, Text } from '@chakra-ui/react'
import React from 'react'
interface MyComponentProps {
  size: string
  sizeData: number | undefined
}
const PokemonSizeInfo: React.FC<MyComponentProps> = ({ size, sizeData }) => {
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  return (
    <Box textAlign={'center'}>
      <Text fontSize={14} color={"#fff"} opacity={0.5}>{size}</Text>
      <Text as='b' fontSize={14} color={"#fff"}>{sizeData as number / 10}{size === 'Wight' ? "kg" : 'ft'}</Text>
    </Box>)
}

export default PokemonSizeInfo