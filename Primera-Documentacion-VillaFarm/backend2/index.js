const express = require('express');
const mongoose1 = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
require('dotenv').config();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

mongoose1.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {console.log("Coneccion de base de datos exitosa!")})

app.use('/api/usuario',require('./routes/usuario'))

const port = process.env.PORT;

app.listen(port,() => {
    console.log(`Servidor de VILLAFARM esta siendo ejecutado en el puerto ${port}`)
})