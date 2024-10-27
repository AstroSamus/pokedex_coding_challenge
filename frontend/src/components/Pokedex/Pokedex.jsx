import { PokemonCard } from "../PokemonCard/PokemonCard"

export const Pokedex = ({ pokemonList }) => {
    return (
        <div>
            <h1>My Pokedex</h1>
            <ul>
                { pokemonList && pokemonList.map((pokemon) => (
                    <PokemonCard key={ pokemon._id }  
                        image = { pokemon.image }
                        name = { pokemon.name }
                        favorite = { pokemon.favorite }/>
                ))}
            </ul>
        </div>
    )
}