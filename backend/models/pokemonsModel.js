const Datastore = require('nedb')
const path = require('path')

const pokemonDB = new Datastore({
    filename: path.join(__dirname, '../db/pokemons.db'),
    autoload: true
})

module.exports = { pokemonDB }