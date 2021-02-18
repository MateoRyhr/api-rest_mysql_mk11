const express = require('express')
const app = express()//creamos el servidor

//settings
app.set('port', process.env.PORT || 3001)


//middlewares
app.use(express.json())

//routes
app.use('/api/personajes/',require('./routes/personajes'))
app.use('/api/reinos/',require('./routes/reinos'))
app.use('/api/razas/',require('./routes/razas'))

//Iniciamos el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})