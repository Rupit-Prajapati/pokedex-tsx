import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { PokemonType, singlePokeData } from '../../PokemonTypes/PokemonTypes';
import { Flex, Text } from '@chakra-ui/react'
import { PokemonImage, PokemonSizeInfo, PokemonTypesDisplay } from './PokemonDetail'
import { PokemonCard } from '../../StyledComponents/PokemonCard';

interface MyComponentsProps {
  singleUrl: string
  loading: boolean
}
const SingleList: React.FC<MyComponentsProps> = ({ singleUrl, loading }) => {

  const [singleData, setSingleData] = useState<singlePokeData | null>(null)
  const [color, setColor] = useState<string | null>(null)
  useEffect(() => {
    fetchSingleData()
  }, [singleUrl])

  const fetchSingleData = async () => {
    const { data } = await axios.get<singlePokeData>(singleUrl)
    setSingleData(data);
    setColor(data.types[0].type.name)
  }

  function capitalize(str?: string) {
    if (str === undefined) {
      return "";
    }
    return str?.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <>
      <PokemonCard color={color as PokemonType}>
        <PokemonImage src={singleData?.sprites.other.dream_world.front_default} name={singleData?.name}
        />
        {
          loading ?
            <Text fontSize={16} color="#fff" opacity={0.5}>
              Loading
            </Text> :
            <Flex gap={1}>
              <Text fontSize={16} color="#fff" opacity={0.5}>
                Type:
              </Text>
              <Text as='b' fontSize={16} color={"#fff"}>
                {capitalize(singleData?.name)}</Text>
            </Flex>
        }
        <Flex gap={5}>
          <PokemonSizeInfo size={"Weight"}
            sizeData={singleData?.weight} />
          <PokemonSizeInfo size={"Height"}
            sizeData={singleData?.height} />
        </Flex>
        <PokemonTypesDisplay types={singleData?.types || []} />
      </PokemonCard >
    </>)
}

export default SingleList