import React from 'react'

const Pokedex = ({ pokemonList }) => {

    return (
        <div>
            <h1>My Pokedex</h1>
            <ul>
                {pokemonList.map((pokemon) => (
                    <li key={pokemon._id}>
                        <img src={pokemon.image} alt={pokemon.name} />
                        <span>{pokemon.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Pokedex;