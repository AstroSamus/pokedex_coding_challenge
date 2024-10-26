/**
 * @module PokemonRoutes
 */


const express = require('express')
const router = express.Router()
const { db } = require('../models/pokemonsModel')


/**
 * @description Gets all Pokémon from the database.
 * @route GET /
 * @async
 * @returns {Object} 200 - JSON array with all the Pokemons
 * @returns {Object} 500 - Error message
 */
router.get('/', async (req, res) => {
    try {
        db.find({}, (error, allPokemons) => {
            if (error) return res.status(500).json({ message: error.message });
            res.json(allPokemons);
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = { pokedexRouter: router }