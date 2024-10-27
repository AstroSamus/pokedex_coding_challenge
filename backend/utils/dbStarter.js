const { pokemonDB } = require('../models/pokemonsModel')

const pokemonDbStarter = async() => {
    const pokeApiRawResponse = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
    const pokeApiResponse = await pokeApiRawResponse.json()
    for(let pokemon of pokeApiResponse.results) {
        //individually fetch the information of every pokemon returned by the pokeApi
        const pokemonDataRawResponse = await fetch(pokemon.url)
        const pokemonDataResponse = await pokemonDataRawResponse.json()
        const newDoc = {
            name: pokemonDataResponse.name,
            image: pokemonDataResponse.sprites.front_default,
        }
    
        pokemonDB.insert(newDoc, (err) => {
            if (err) console.error('error when inserting the new document', err)
        })
    }
}

module.exports = { pokemonDbStarter }