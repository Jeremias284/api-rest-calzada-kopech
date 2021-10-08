const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

const app = express();

app.use(express.json());

//Cors
app.use(cors());

//Uso del metodo de conexion de Mongoose
mongoose.connect('mongodb+srv://JERE:jere1234@cluster0.tiwfy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(()=>{
    console.log('Base de datos conectado')
})
.catch((error)=>{
    console.log( `Base de datos no conctada: ${error}`)
});

app.listen(5000, ()=>{
    console.log(`Escuchando el ejemplo de API en: http://localhost:${5000}`)
});