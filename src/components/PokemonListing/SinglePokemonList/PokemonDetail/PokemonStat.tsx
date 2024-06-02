import React from 'react'
import { stat } from '../../../PokemonTypes/PokemonTypes'
import { Box, Slider, SliderFilledTrack, SliderTrack, Text } from '@chakra-ui/react'
import { typeColors } from '../../../PokemonColor/pokemonColor'
interface MyComponentProps {
  stats: stat[] | undefined
}
const PokemonStat: React.FC<MyComponentProps> = ({ stats }) => {
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  return (
    <Box>
      {stats?.map(stat => {
        var stats = stat.base_stat
        var statName = stat.stat.name;
        var green = typeColors['grass']
        var red = typeColors['fire']
        return <>
          <Text color={'#fff'}> {capitalize(statName)} : {stats}
            <Slider aria-label='slider-ex-4' value={stats}>
              <SliderTrack bg='white'>
                <SliderFilledTrack bg={stats > 50 ? green : red} />
              </SliderTrack>
            </Slider>
          </Text>
        </>
      })
      }</Box>
  )
}

export default PokemonStat