import styled from 'styled-components';
import { PokemonType } from '../PokemonTypes/PokemonTypes';
import { typeColors } from '../PokemonColor/pokemonColor';
import { Flex } from '@chakra-ui/react';

export const PokemonCard = styled(Flex)`
  border: 2px solid ${props => typeColors[props.color as PokemonType] || '#000'};
  width: 340px;
  @media (min-width: 30em) {
    width: 50%;
  }
  @media (min-width: 48em) {
    width: calc(33% - 10px);
  }
  @media (min-width: 62em) {
    width: calc(25% - 10px);
  }
  @media (min-width: 80em) {
    width: calc(20% - 10px);
  }
  flex-direction: column;
  align-items: center;
  gap: 16px;
  overflow: hidden;
  padding: 20px;
  background: linear-gradient(to bottom, rgb(43, 42, 42), rgb(27, 27, 27));
  box-shadow: 0 3px 10px ${props => typeColors[props.color as PokemonType] || '#ff0000'};
  transition: all 2s ease-in-out;
  border-radius: 10px;
`;