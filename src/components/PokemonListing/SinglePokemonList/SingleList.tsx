import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { PokemonType, singlePokeData } from '../../PokemonTypes/PokemonTypes';
import { Box, Button, Flex, Image, Text, useDisclosure } from '@chakra-ui/react'
import { PokemonImage, PokemonSizeInfo, PokemonTypesDisplay } from './PokemonDetail'
import { PokemonCard } from '../../StyledComponents/PokemonCard';
import PokemonStat from './PokemonDetail/PokemonStat';
import { typeColors } from '../../PokemonColor/pokemonColor';
import PokemonModal from './PokemonDetail/PokemonPopup/PokemonModal';
import SinglePokemonLoading from './Loader/SinglePokemonLoading';

interface MyComponentsProps {
  singleUrl: string
}
const SingleList: React.FC<MyComponentsProps> = ({ singleUrl }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [singleData, setSingleData] = useState<singlePokeData | null>(null)
  const [color, setColor] = useState<string | null>(null)
  const [error, setError] = useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    fetchSingleData()
  }, [singleUrl])

  const fetchSingleData = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get<singlePokeData>(singleUrl)
      setSingleData(data);
      setColor(typeColors[data.types[0].type.name as PokemonType])
      setLoading(false)
    } catch (err) {
      setError('Pokemon not found. Please check the name and try again.');
      setSingleData(null);
      setColor(null);
      setLoading(false)
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
      {error
        ? (
          <Flex justifyContent="center" alignItems="center">
            <Text fontSize={25} color={'red.600'}>
              {error}
            </Text>
          </Flex>
        ) : loading
          ? <SinglePokemonLoading />
          : (
            <PokemonCard onClick={onOpen} color={color as PokemonType}>
              <PokemonImage src={singleData?.sprites.other.dream_world.front_default} name={singleData?.name} />
              <Flex gap={2}>
                <Text fontSize={16} opacity={0.5}>
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
              <Button colorScheme='teal' size='md' mt={2} height={'auto'} borderRadius={5} padding={"5px 15px"} onClick={onOpen}>View Stats</Button>
              <PokemonModal isOpen={isOpen} onClose={onClose} >
                <Flex gap={5} flexWrap={'wrap'} justifyContent={'center'}>
                  <Flex direction={'column'} gap={2} height={{ base: "250px", sm: '300px' }} width={{ base: '250px', md: '300px' }} background={'linear-gradient(to bottom,rgba(214, 214, 214, 0.3),rgba(77, 77, 77, 0.1))'} boxShadow={'0 0 10px 10px rgba(202, 201, 201, 0.05)'} borderRadius={'50%'} justifyContent={'center'} alignItems={'center'}>
                    < Image
                      maxW={{ base: "180px", sm: '280px' }}
                      height={{ base: "180px", sm: '280px' }}
                      objectFit='contain'
                      src={singleData?.sprites.other.dream_world.front_default} alt={singleData?.name}
                    />
                    <PokemonTypesDisplay types={singleData?.types || []} />
                    <Text fontWeight={600} fontSize={18} color={color as PokemonType}>
                      {capitalize(singleData?.name)}
                    </Text>
                  </Flex>
                  <Flex direction={'column'} gap={4} width={{ base: '100%', md: '300px' }}>
                    <PokemonStat stats={singleData?.stats} />
                  </Flex>
                </Flex>
              </PokemonModal>
            </PokemonCard>
          )}
    </>)
}

export default SingleList