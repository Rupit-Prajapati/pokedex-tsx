import React, { Suspense, lazy } from 'react'
import { PokemonResult } from '../PokemonTypes/PokemonTypes';
const SingleList = lazy(() => import('./SinglePokemonList/SingleList'));
interface MyComponentProps {
  data: PokemonResult[] | null;
  loading: boolean
}
const PokeList: React.FC<MyComponentProps> = ({ data, loading }) => {
  return (
    <>
      {data?.map(data => (
        <SingleList loading={loading} singleUrl={data.url} />
      ))}
    </>
  )
}

export default PokeList