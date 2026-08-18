import { useState, useEffect } from 'react'
import PokemonCard from './components/PokemonCard'
function App() {
  const [pokemonData, setPokemonData] = useState([])
  const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'

  const fetchPokemons = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}${id}`)
      const data = await response.json()

      setPokemonData((prevPokemonData) => [
        ...prevPokemonData,
        data
      ])
    } catch (error) {
      console.error('ERROR CON EL FETCH DE POKEMONES')
    }
  }

  const fetchAllPokemon = () => {
    for (let i = 1; i <= 20; i++) {
      fetchPokemons(i)
    }
  }

  useEffect(() => {
    fetchAllPokemon()
  }, [])

  return (
    <>
      <h1>POKE API DEMO</h1>

      {pokemonData.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemonData={pokemon}
        />
      ))}
    </>
  )
}

export default App