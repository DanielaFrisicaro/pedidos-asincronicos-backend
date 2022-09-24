const express = require('express');
const app = express();
const path = require ('path')

const apiRoute= require ('./src/routes/apiRoute')


//informo que motor vamos a usar. Configuracion de EJS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './src/views'))//estoy dentro de src, por eso solo con llamar a /views va a ingresar
//uso los enrutadores

app.use('/api', apiRoute)

//escucho al puerto
app.listen(3000, () =>{
    console.log('Escuchando en el puerto 3000')
})