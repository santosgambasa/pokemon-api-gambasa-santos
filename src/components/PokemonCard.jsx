export default function PokemonCard({ pokemonData }) {
  return (
    <div className="pokemon-card">

      <img
        src={pokemonData.sprites.front_default}
        alt={pokemonData.name}
        className="pokemon-image"
      />

      <h2 className="pokemon-name">
        {pokemonData.name}
      </h2>

      <p>ID: {pokemonData.id}</p>

    </div>
  )
}