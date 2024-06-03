import styled from 'styled-components';
import { Flex } from '@chakra-ui/react';

export const PokemonCard = styled(Flex)`
  border: 2px solid ${props => props.color};
  width: 300px;
  @media (min-width: 30em) {
    width: calc(50% - 8px);
  }
  @media (min-width: 48em) {
    width: calc(33% - 10px);
  }
  @media (min-width: 62em) {
    width: calc(25% - 10px);
  }
  @media (min-width: 80em) {
    width: calc(20% - 12px);
  }
  flex-direction: column;
  align-items: center;
  color:#fff;
  gap: 16px;
  overflow: hidden;
  padding: 20px;
  background: linear-gradient(to bottom, rgb(43, 42, 42), rgb(27, 27, 27));
  box-shadow: 0 3px 10px ${props => props.color};
  transition: all 0.2s ease-in-out;
  border-radius: 10px;
`;