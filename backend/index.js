const { db } = require('./models/pokemonsModel.js')
const { pokedexRouter } = require('./routes/pokedex.js')
const express = require('express')
const PORT = 3000

const app = express()
app.use(express.json())

app.use('/', pokedexRouter)

db.count({}, async(error, count) => {
    if(error) console.log('an error ocurred when counting the db', error)
    if(count == 0){
        //if the db is empty, we need to load pokemons from the pokeApi
        const { pokemonDbStarter } = await import('./utils/dbStarter.js')
        pokemonDbStarter()
    }
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})


module.exports = express.Router
