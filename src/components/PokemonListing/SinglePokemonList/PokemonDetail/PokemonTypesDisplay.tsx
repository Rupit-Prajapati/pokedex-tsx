import {
  Flex, Text
} from '@chakra-ui/react';
import React from 'react';
import { types } from '../../../PokemonTypes/PokemonTypes';

interface PokemonTypesDisplayProps {
  types: types[];
}

const PokemonTypesDisplay: React.FC<PokemonTypesDisplayProps> = ({ types }) => {
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

  return (
    <><Flex gap={1}>
      <Text fontSize={14} color="#fff" opacity={0.5}>
        Type:
      </Text>
      <Text as="b" fontSize={14} color="#fff">
        {types.map((type, index) => (
          <Text key={index} as="b" fontSize={14} color="#fff">
            {capitalize(type.type.name)}
            {index < types.length - 1 ? '/' : ''}
          </Text>
        ))}
      </Text>
    </Flex>
    </>
  );
};

export default PokemonTypesDisplay;
