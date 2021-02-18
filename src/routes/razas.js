const express = require('express')
const router = express.Router()
const mysqlConnection = require('../db/database')

router.get('/',(req,res) => {
    mysqlConnection.query('SELECT * FROM razas',(err,rows,fields) => {
        if(err){
            console.error(new Error('Error al obtener los datos de la base.'))
        }else{
            res.json(rows)
        }
    })
})

router.get('/:id',(req,res) => {
    const { id } = req.params
    const query = `SELECT * FROM razas WHERE razas_id = ${id}`
    mysqlConnection.query(query,(err,rows,fields) => {
        if(err){
            console.error(new Error('Error al obtener los datos de la base.'))
        }else{
            res.json(rows)
        }
    })
})

module.exports = router