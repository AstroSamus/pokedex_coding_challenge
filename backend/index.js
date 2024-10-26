const express = require('express')
const Datastore = require('nedb')
const path = require('path')
const PORT = 3000

const app = express()
app.use(express.json())

const db = new Datastore({
    filename: path.join(__dirname, '/db/pokemons.db'),
    autoload: true
});

db.count({}, async(error, count) => {
    if(error) console.log('an error ocurred when counting the db', error)
    if(count == 0){
        //if the db is empty, we need to load pokemons from the pokeApi
        const { pokemonDbStarter } = await import('./utils/dbStarter.js')
        pokemonDbStarter(db)
    }
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})

