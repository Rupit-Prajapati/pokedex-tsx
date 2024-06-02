import React, { Suspense, useEffect, useState } from 'react';
import './App.css';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  Stack,
  Button,
  Container,
} from '@chakra-ui/react'
import axios from 'axios'
import { PokemonData, PokemonResult, singlePokeData, singlePokemon } from './components/PokemonTypes/PokemonTypes';
import PokeList from './components/PokemonListing/PokeList';
import SinglePokemonLoading from './components/PokemonListing/SinglePokemonList/Loader/SinglePokemonLoading';

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
    <><Box background={'linear-gradient(to top, #2c2b2e, #16141b)'}>
      <Container maxW={{
        base: '100%',
        sm: '450px',
        md: '750',
        lg: '950',
        xl: '1200px',
      }}
        py={'50px'}
        margin={'0px auto'}>
        <Stack spacing={4} direction='row' align='center'>
          <Button colorScheme='teal' size='md' isDisabled={prevUrl ? false : true} onClick={() => setUrl(prevUrl ?? url)}>
            Previous
          </Button>
          <Button colorScheme='teal' size='md' isDisabled={nextUrl ? false : true} onClick={() => setUrl(nextUrl ?? url)}>
            Next
          </Button>
        </Stack>
        <Flex width={'100%'} flexWrap={"wrap"} alignItems={'center'} marginTop={10} justifyContent={'space-between'} rowGap={'20px'}>
          {loading ? (<>
            <SinglePokemonLoading />
            <SinglePokemonLoading />
            <SinglePokemonLoading />
            <SinglePokemonLoading />
            <SinglePokemonLoading />
            <SinglePokemonLoading />
            <SinglePokemonLoading />
            <SinglePokemonLoading />
            <SinglePokemonLoading />
            <SinglePokemonLoading />
          </>
          )
            : <PokeList loading={loading} data={pokeUrls} />
          }
        </Flex>
      </Container>
    </Box></>
  );
}

export default App;