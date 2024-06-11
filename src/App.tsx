import React, { Suspense, useEffect, useState } from 'react';
import './App.css';
import {
  Box,
  Flex,
  Stack,
  Button,
  Container,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import axios from 'axios'
import { PokemonData, PokemonResult, singlePokeData, singlePokemon } from './components/PokemonTypes/PokemonTypes';
import PokeList from './components/PokemonListing/PokeList';
import SinglePokemonLoading from './components/PokemonListing/SinglePokemonList/Loader/SinglePokemonLoading';
import SingleList from './components/PokemonListing/SinglePokemonList/SingleList';
import { Search2Icon } from '@chakra-ui/icons';

function App() {
  const [loading, setLoading] = useState<boolean>(false)
  const [url, setUrl] = useState<string>('https://pokeapi.co/api/v2/pokemon/')
  const [nextUrl, setNextUrl] = useState<string | null>()
  const [prevUrl, setPrevUrl] = useState<string | null>()
  const [pokeUrls, setPokeUrls] = useState<PokemonResult[] | null>(null);

  const fetchData = async () => {
    setLoading(true)
    setPokeUrls(null)
    const { data } = await axios.get<PokemonData>(url)
    setNextUrl(data.next)
    setPokeUrls(data.results)
    setPrevUrl(data.previous)
    setLoading(false)
  }
  useEffect(() => {
    fetchData();
  }, [url])

  return (
    <>
      <Container maxW={{
        base: '100%',
        sm: '450px',
        md: '750',
        lg: '950',
        xl: '1200px',
      }}
        height={'100%'}
        py={'50px'}
        margin={'0px auto'}>
        <Stack spacing={4} direction='row' align='center' justifyContent={'center'} margin={'0px auto'} maxW={'800px'} flexWrap={"wrap"}>
          <Button colorScheme='teal' size='md' isDisabled={prevUrl ? false : true} onClick={() => setUrl(prevUrl ?? url)}>
            Previous
          </Button>
          <Button colorScheme='teal' size='md' isDisabled={nextUrl ? false : true} onClick={() => setUrl(nextUrl ?? url)}>
            Next
          </Button>
        </Stack>
        <Flex width={'100%'} flexWrap={"wrap"} alignItems={'center'} marginTop={10} justifyContent={'center'} gap={'15px'}>
          {loading ?
            <>
              <SinglePokemonLoading />
              <SinglePokemonLoading />
              <SinglePokemonLoading />
              <SinglePokemonLoading />
              <SinglePokemonLoading />
            </>
            :
            <PokeList data={pokeUrls} />
          }
        </Flex>
      </Container>
    </>)
}
export default App;
