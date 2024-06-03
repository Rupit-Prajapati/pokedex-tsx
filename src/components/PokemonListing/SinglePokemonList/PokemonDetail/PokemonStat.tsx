import React from 'react'
import { stat } from '../../../PokemonTypes/PokemonTypes'
import { Box, Flex, Slider, SliderFilledTrack, SliderTrack, Text } from '@chakra-ui/react'
import { typeColors } from '../../../PokemonColor/pokemonColor'
interface MyComponentProps {
  stats: stat[] | undefined
}
const PokemonStat: React.FC<MyComponentProps> = ({ stats }) => {
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  return (
    <Flex gap={5} direction={'column'}>
      {stats?.map((stat, index) => {
        var stats = stat.base_stat
        var statName = stat.stat.name;
        var green = typeColors['grass']
        var red = typeColors['fire']
        return <Box key={index}>
          <Text fontWeight={'600'} lineHeight={'120%'}> {capitalize(statName)} : {stats}
          </Text>
          <Slider aria-label='slider-ex-4' value={stats}>
            <SliderTrack bg='grey'>
              <SliderFilledTrack bg={stats > 50 ? green : red} />
            </SliderTrack>
          </Slider>
        </Box>
      })
      }</Flex>
  )
}

export default PokemonStat