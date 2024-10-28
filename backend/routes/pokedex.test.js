const request = require('supertest')
const express = require('express')
const { pokedexRouter } = require('./pokedex')

jest.mock('../models/pokemonsModel', () => ({
    pokemonDB: {
        find: jest.fn(),
        findOne: jest.fn(),
        update: jest.fn(),
    },
}))

const { pokemonDB } = require('../models/pokemonsModel')

const app = express()
app.use(express.json())
app.use('/pokedex', pokedexRouter)

describe('Pokedex API', () => {
    describe('GET /pokedex', () => {
        it('should return all pokemons', async () => {
            const mockPokemons = [
                { name: 'pokemon1', favorite: false },
                { name: 'pokemon2', favorite: true },
            ]
            pokemonDB.find.mockImplementation((query, callback) => callback(null, mockPokemons))

            const res = await request(app).get('/pokedex')
            expect(res.statusCode).toBe(200)
            expect(res.body).toEqual(mockPokemons)
        })

        it('should return a 500 error if fetching all pokemons fails', async () => {
            pokemonDB.find.mockImplementation((query, callback) => callback(new Error('Database error')))

            const res = await request(app).get('/pokedex')
            expect(res.statusCode).toBe(500)
            expect(res.body).toHaveProperty('message', 'Database error')
        })
    })

    describe('GET /pokedex/:name', () => {
        it('should return a pokemon by name', async () => {
            const mockPokemon = { name: 'pokemon1', favorite: false }
            pokemonDB.findOne.mockImplementation((query, callback) => callback(null, mockPokemon))

            const res = await request(app).get('/pokedex/pokemon1')
            expect(res.statusCode).toBe(200)
            expect(res.body).toEqual(mockPokemon)
        })

        it('should return 404 if pokemon is not found', async () => {
            pokemonDB.findOne.mockImplementation((query, callback) => callback(null, null))

            const res = await request(app).get('/pokedex/nonexistent')
            expect(res.statusCode).toBe(404)
            expect(res.body).toHaveProperty('message', 'No pokemon with that name')
        })

        it('should return 500 if there is an error fetching a pokemon', async () => {
            pokemonDB.findOne.mockImplementation((query, callback) => callback(new Error('Database error')))

            const res = await request(app).get('/pokedex/pokemon1')
            expect(res.statusCode).toBe(500)
            expect(res.body).toHaveProperty('message', 'Database error')
        })
    })

    describe('PATCH /pokedex/favorite/:id', () => {
        it('should toggle the favorite status of a pokemon', async () => {
            const mockPokemon = { _id: '1', name: 'pokemon1', favorite: false }
            pokemonDB.findOne.mockImplementation((query, callback) => callback(null, mockPokemon))
            pokemonDB.update.mockImplementation((query, updatedPokemon, options, callback) => callback(null))

            const res = await request(app).patch('/pokedex/favorite/1')
            expect(res.statusCode).toBe(200)
            expect(res.body).toHaveProperty('name', 'pokemon1')
            expect(res.body).toHaveProperty('favorite', true)
        })

        it('should return 404 if pokemon is not found for toggling favorite', async () => {
            pokemonDB.findOne.mockImplementation((query, callback) => callback(null, null))

            const res = await request(app).patch('/pokedex/favorite/999')
            expect(res.statusCode).toBe(404)
            expect(res.body).toHaveProperty('message', 'Pokemon not found')
        })

        it('should return 500 if there is an error updating favorite status', async () => {
            const mockPokemon = { _id: '1', name: 'pokemon1', favorite: false }
            pokemonDB.findOne.mockImplementation((query, callback) => callback(null, mockPokemon))
            pokemonDB.update.mockImplementation((query, updatedPokemon, options, callback) => callback(new Error('Update error')))

            const res = await request(app).patch('/pokedex/favorite/1')
            expect(res.statusCode).toBe(500)
            expect(res.body).toHaveProperty('message', 'Update error')
        })
    })
})