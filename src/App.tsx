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
  Text,
} from '@chakra-ui/react'
import axios from 'axios'
import { PokemonData, PokemonResult, singlePokeData, singlePokemon } from './components/PokemonTypes/PokemonTypes';
import PokeList from './components/PokemonListing/PokeList';
import SinglePokemonLoading from './components/PokemonListing/SinglePokemonList/Loader/SinglePokemonLoading';
import SingleList from './components/PokemonListing/SinglePokemonList/SingleList';
import { Search2Icon } from '@chakra-ui/icons';
import Loading from './components/PokemonListing/Loading';

function App() {
  const [loading, setLoading] = useState<boolean>(false)
  const [url, setUrl] = useState<string>('https://pokeapi.co/api/v2/pokemon/')
  const [nextUrl, setNextUrl] = useState<string | null>()
  const [prevUrl, setPrevUrl] = useState<string | null>()
  const [pokeUrls, setPokeUrls] = useState<PokemonResult[] | null>(null);
  const [search, setSearch] = useState<string>('')
  const [searchUrl, setSearchUrl] = useState<any>('')

  const fetchData = async () => {
    setLoading(true)
    setPokeUrls(null)
    const { data } = await axios.get<PokemonData>(url)
    setNextUrl(data.next)
    setPokeUrls(data.results)
    setPrevUrl(data.previous)
    setLoading(false)
  }

  const searchByName = async () => {
    const query = search.toLocaleLowerCase();
    if (query.trim().length > 0) setSearchUrl(`https://pokeapi.co/api/v2/pokemon/${query}`)
  }
  const pressEnter = (e: any) => {
    if (e.code === 'Enter') searchByName()
  }
  useEffect(() => {
    fetchData();
    setSearch('')
    setSearchUrl('')
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
        py={{ base: '20px', md: '50px' }}
        margin={'0px auto'}>
        <Stack spacing={10}>
          <Stack spacing={4} width={'100%'} direction={{ base: 'column', md: 'row' }} alignItems={{ base: 'stretch', md: 'center' }} justifyContent={'space-between'} margin={'0px auto'} >
            <Text as={'h1'} textAlign={'center'} fontSize={40} color={'#fff'}>PokeDex</Text>
            <Stack direction={{ base: 'column', md: 'row' }} alignItems={{ base: 'stretch', md: 'center' }} spacing={4}>
              <InputGroup size='lg'>
                <Input width={{ base: '100%', md: '300px' }} onKeyDown={(e) => pressEnter(e)} onChange={(e) => setSearch(e.target.value)} placeholder='Search...' border={'none'} outline={'none'} variant={'unstyled'} bg={'#fff'} padding={'10px 10px'} />
                <InputRightElement >
                  <Button onClick={searchByName} colorScheme={'teal'} size='md' mr={1} >
                    <Search2Icon />
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Stack direction={'row'} justifyContent={'space-between'} spacing={4}>
                <Button colorScheme='teal' size='md' padding={'0px 20px'} isDisabled={prevUrl ? false : true} onClick={() => setUrl(prevUrl ?? url)}>
                  Previous
                </Button>
                <Button colorScheme='teal' size='md' padding={'0px 20px'} isDisabled={nextUrl ? false : true} onClick={() => setUrl(nextUrl ?? url)}>
                  Next
                </Button>
              </Stack>
            </Stack>
          </Stack>
          {searchUrl && <Box>
            <Text as={'h3'} color={'#fff'} fontSize={25} marginBottom={5}> Search result</Text>
            <SingleList singleUrl={searchUrl} /> </Box>}
          <Flex width={'100%'} flexWrap={"wrap"} alignItems={'center'} justifyContent={'center'} gap={'15px'}>
            {loading ?
              <Loading />
              :
              <PokeList data={pokeUrls} />
            }
          </Flex>
        </Stack>
      </Container >
    </>)
}
export default App;
