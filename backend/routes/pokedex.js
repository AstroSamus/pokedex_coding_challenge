/**
 * @module PokemonRoutes
 */


const express = require('express')
const router = express.Router()
const { pokemonDB } = require('../models/pokemonsModel')


/**
 * @description Gets all Pokémon from the database.
 * @route GET /
 * @async
 * @returns {Object} 200 - JSON array with all the Pokemons
 * @returns {Object} 500 - Error message
 */
router.get('/', async (req, res) => {
    try {
        pokemonDB.find({}, (error, allPokemons) => {
            if (error) return res.status(500).json({ message: error.message });
            res.json(allPokemons);
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

/**
 * @description Gets a Pokemon by name.
 * @route GET /:name
 * @returns {Object} 200 - JSON object of the found pokemon.
 * @returns {Object} 404 - Error message if the pokemon is not found.
 * @returns {Object} 500 - Error message if something goes wrong.
 */
router.get('/:name', (req, res) => {
    try {
        pokemonDB.findOne({ name: req.params.name }, (error, pokemon) => {
            if (error) return res.status(500).json({ message: error.message })
            if (!pokemon) return res.status(404).json({ message: 'No pokemon with that name' })
            res.json(pokemon)
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = { pokedexRouter: router }