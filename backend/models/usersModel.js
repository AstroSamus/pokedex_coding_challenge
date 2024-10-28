const Datastore = require('nedb')
const path = require('path')

const userDB = new Datastore({
  filename: path.join(__dirname, '../db/users.db'),
  autoload: true
});

// Ensure that the email field is unique
userDB.ensureIndex({ fieldName: 'email', unique: true }, (error) => {
    if (error) {
        console.error('Error creating index on email:', error)
    }
})

module.exports = { userDB }