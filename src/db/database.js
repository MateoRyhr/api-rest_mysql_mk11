const mysql = require('mysql')

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '153214',
    database: 'mk11'
})

mysqlConnection.connect((err) => {
    if(err){
        console.error(new Error('Error al conectarse a la base de datos'))
    } else{
        console.log('DB is connected')
    }
})

module.exports = mysqlConnection