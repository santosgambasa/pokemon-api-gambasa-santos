export default function PokemonCard({ pokemonData }) {
  return (
    <div>
      <img
        src={pokemonData.sprites.front_default}
        alt={pokemonData.name}
      />

      <h2>{pokemonData.name}</h2>

      <p>ID: {pokemonData.id}</p>
    </div>
  )
}