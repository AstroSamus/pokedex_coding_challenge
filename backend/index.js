const express = require('express')
const Datastore = require('nedb');
const path = require('path');
const PORT = 3000

const app = express()
app.use(express.json())

const db = new Datastore({
    filename: path.join(__dirname, '/db/pokemons.db'),
    autoload: true
});

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})

