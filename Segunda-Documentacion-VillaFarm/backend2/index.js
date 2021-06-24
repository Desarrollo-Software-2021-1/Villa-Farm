const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
require('dotenv').config();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {console.log("Coneccion de base de datos exitosa!")})

//rutas
app.use('/api/auth',require('./routes/authentication/auth'));
app.use('/api/posts',require('./routes/post/post'))
app.use('/api/postsproducts',require('./routes/post/postproduct'))
app.use('/api/like',require('./routes/like/like'))
app.use('/api/comment',require('./routes/comment/comment'))
app.use('/api/follow',require('./routes/follow/follow'))




//listen to port
const port = process.env.PORT;

app.listen(port,() => {
    console.log(`Servidor de VILLAFARM esta siendo ejecutado en el puerto ${port}`)
})