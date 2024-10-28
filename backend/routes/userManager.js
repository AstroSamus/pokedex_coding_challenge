/**
 * @module UserRoutes
 */

const express = require('express')
const router = express.Router()
const { userDB } = require('../models/usersModel')

/**
 * @description Creates a new user in the database.
 * @route POST /users
 * @returns {Object} 201 - JSON object with the created user's ID.
 * @returns {Object} 500 - Error message if something goes wrong.
 */
router.post('/create', (req, res) => {
    // Create the user with an empty list of favorite pokemons
    const userData = { favPokemons: [] }

    userDB.insert(userData, (error, newUser) => {
        if (error) {
            return res.status(500).json({ message: error.message })
        }
        res.status(201).json({ id: newUser._id })
    })
})

module.exports = { userManagerRouter: router }