const db = require('../../data/dbConfig')

module.exports = {
    add,
    findById,
    findByUsername,
}

async function add(user) {
    const [id] = await db('users').insert(user)
    return findById(id)
}

function findById(id) {
    return db('users')
        .select('users.id', 'users.username', 'users.password')
        .where('users.id', id)
        .first()
}

function findByUsername(username) {
    return db('users')
        .where('users.username', username)
        .first()
}