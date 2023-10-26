import express from 'express';
import dotenv from 'dotenv';//importamos dotenv para poder usar el metodo config

import router from './routes/router.js';

dotenv.config();//configuramos dotenv para que pueda leer el archivo .env
const app = express();//creamos una constante app que sera igual a express

app.use(express.static('./public'));//usamos el metodo use de express para que use la carpeta public

app.set('views', './src/views');//usamos el metodo set de express para que use la carpeta views
app.set('view engine', 'pug');//usamos el metodo set de express para que use el motor de plantillas pug

app.use(express.json());//usamos el metodo use de express para que use el metodo json
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {//
    res.render('home')
    });


app.use('/', router);// usamos el metodo use de express para que cuando se introduzca / se ejecute el archivo router.js


app.listen(3000, () => {
  console.log('servidor iniciado en el puerto 3000');
});