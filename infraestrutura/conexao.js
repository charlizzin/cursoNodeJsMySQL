import { createConnection } from 'mysql2'
const mysql = require('mysql2')



const conexao = createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '@Admin#',
    database: 'agenda-petshop'
})

export default conexao