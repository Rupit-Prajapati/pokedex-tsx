export interface PokemonResult {
  name: string,
  url: string
}

export interface singlePokeData {
  name: string,
  height: number
  weight: number
  sprites: {
    other: {
      dream_world: {
        front_default: string
      }
    }
  }
  abilities: {
    ability: { name: string }
  }[]
  stats: {
    base_stat: number
    stat: {
      name: string
    }
  }
  species: {
    url: string
  }
  types: types[]
}
export interface types {
  type: {
    name: string
  }
}
export interface singlePokemon {
  results: singlePokeData[]
}
export interface PokemonData {
  next: string,
  previous: string,
  results: PokemonResult[],
}

export type PokemonType =
  | 'grass'
  | 'poison'
  | 'fire'
  | 'flying'
  | 'water'
  | 'bug'
  | 'normal'
  | 'electric'
  | 'ground'
  | 'fairy'
  | 'fighting'
  | 'psychic'
  | 'rock'
  | 'steel'
  | 'ice'
  | 'ghost'
  | 'dragon'
  | 'dark'
  ;