import {
  Badge,
  Flex, Text
} from '@chakra-ui/react';
import React from 'react';
import { PokemonType, types } from '../../../PokemonTypes/PokemonTypes';
import { typeColors } from '../../../PokemonColor/pokemonColor';

interface PokemonTypesDisplayProps {
  types: types[];
}

const PokemonTypesDisplay: React.FC<PokemonTypesDisplayProps> = ({ types }) => {

  return (
    <><Flex gap={2} flexWrap={'wrap'}>
      {types.map((type, index) => {
        return (
          <Badge key={index} borderRadius={20} padding={"5px 15px"} backgroundColor={typeColors[type.type.name as PokemonType]}>{type.type.name}</Badge>
        )
      })}
    </Flex>
    </>
  );
};

export default PokemonTypesDisplay;
