import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { PokemonType, singlePokeData } from '../../PokemonTypes/PokemonTypes';
import { Box, Button, Flex, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Text, useDisclosure } from '@chakra-ui/react'
import { PokemonImage, PokemonSizeInfo, PokemonTypesDisplay } from './PokemonDetail'
import { PokemonCard } from '../../StyledComponents/PokemonCard';
import PokemonStat from './PokemonDetail/PokemonStat';
import { typeColors } from '../../PokemonColor/pokemonColor';
import PokemonModal from './PokemonDetail/PokemonPopup/PokemonModal';

interface MyComponentsProps {
  singleUrl: string
}
const SingleList: React.FC<MyComponentsProps> = ({ singleUrl }) => {

  const [singleData, setSingleData] = useState<singlePokeData | null>(null)
  const [color, setColor] = useState<string | null>(null)
  const [error, setError] = useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    fetchSingleData()
  }, [singleUrl])

  const fetchSingleData = async () => {
    try {
      const { data } = await axios.get<singlePokeData>(singleUrl)
      setSingleData(data);
      setColor(typeColors[data.types[0].type.name as PokemonType])
    } catch (err) {
      setError('Pokemon not found. Please check the name and try again.');
      setSingleData(null);
      setColor(null);
    }
  }

  function capitalize(str?: string) {
    if (str === undefined) {
      return "";
    }
    return str?.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <>
      {error ? (
        <Flex justifyContent="center" alignItems="center" marginTop={10}>
          <Text fontSize={16} color="#ff0000">
            {error}
          </Text>
        </Flex>
      ) : (
        <PokemonCard color={color as PokemonType}>
          <PokemonImage src={singleData?.sprites.other.dream_world.front_default} name={singleData?.name} />
          <Flex gap={2}>
            <Text fontSize={16} color="#fff" opacity={0.5}>
              Name:
            </Text>
            <Text as='b' fontSize={16} color={"#fff"}>
              {capitalize(singleData?.name)}
            </Text>
          </Flex>
          <Flex gap={8}>
            <PokemonSizeInfo size={"Weight"} sizeData={singleData?.weight} />
            <PokemonSizeInfo size={"Height"} sizeData={singleData?.height} />
          </Flex>
          <PokemonTypesDisplay types={singleData?.types || []} />
          {/* <Button onClick={onOpen} padding={2} height={'auto'} >More Details</Button>
          <PokemonModal isOpen={isOpen} onClose={onClose} >
            <PokemonStat stats={singleData?.stats} />
          </PokemonModal> */}
        </PokemonCard>
      )}
    </>)
}

export default SingleList