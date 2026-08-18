import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'


function App() {
  const[pokemonData, setPokemon]= useState(null)
  const BASE_URL = `https://pokeapi.co/api/v2/`

  const fetchPokemons = async (id) => {
    const promise = await fetch(`${BASE_URL}${id}`)
  }
  return (
    <>

    </>
  )
}

export default App
