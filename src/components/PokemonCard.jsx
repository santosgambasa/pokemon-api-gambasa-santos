import { useState } from 'react'

export default function PokemonCard({ pokemonData }) {

    const [isShiny, setIsShiny] = useState(false)
  return (
    <div className="pokemon-card">

      <img
        src={
            isShiny
            ? pokemonData.sprites.front_shiny
            : pokemonData.sprites.front_default
        }
        alt={pokemonData.name}
        className="pokemon-image"
      />

      <h2 className="pokemon-name">
        {pokemonData.name}
      </h2>

      <p>ID: {pokemonData.id}</p>

      <button
        className="shiny-button"
        onClick={() => setIsShiny(!isShiny)}
      >
        {isShiny ? 'Normal' : 'Shiny'}
      </button>

    </div>
  )
}