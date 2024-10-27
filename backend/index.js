const { pokemonDB } = require('./models/pokemonsModel.js')
const { pokedexRouter } = require('./routes/pokedex.js')
const cors = require('cors')
const express = require('express')
const PORT = 3000

const app = express()

app.use(cors())
app.use(express.json())
app.use('/pokedex', pokedexRouter)

pokemonDB.count({}, async(error, count) => {
    if(error) console.log('an error ocurred when counting the pokemonDB', error)
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
