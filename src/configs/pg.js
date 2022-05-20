const { Pool } = require('pg')

const pool = new Pool({
    user: 'admin',
    host: 'localhost',
    database: 'horus',
    password: '123456',
    port: 5440
})
module.exports = { query: (text, params) => pool.query(text, params)}