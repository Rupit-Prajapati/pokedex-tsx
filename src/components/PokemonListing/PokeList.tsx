import React, { Suspense, lazy } from 'react'
import { PokemonResult } from '../PokemonTypes/PokemonTypes';
const SingleList = lazy(() => import('./SinglePokemonList/SingleList'));
interface MyComponentProps {
  data: PokemonResult[] | null;
}
const PokeList: React.FC<MyComponentProps> = ({ data }) => {
  return (
    <>
      {data?.map(data => (
        <SingleList key={data.name} singleUrl={data.url} />
      ))}
    </>
  )
}

export default PokeList