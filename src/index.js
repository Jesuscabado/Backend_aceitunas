import express from 'express';//importamos express 
import dotenv from 'dotenv';//importamos dotenv para poder usar el metodo config
import session from 'express-session';//importamos express-session para poder usar el metodo session

import router from './routes/router.js';//importamos el archivo router.js que esta en la carpeta routes

dotenv.config();//configuramos dotenv para que pueda leer el archivo .env
const app = express();//creamos una constante app que sera igual a express

app.use(express.static('./public'));//usamos el metodo use de express para que use la carpeta public
app.use(session ({
    secret: process.env.SESSION_SECRET,
    resave: false,//hace que la sesion no se guarde hasta que se modifique
    saveUninitialized: false,//hace que la sesion no se guarde hasta que se inicialice
    cookie: {
      secure: false,
    maxAge: 1000*60*20
  }//
}));

app.set('views', './src/views');//usamos el metodo set de express para que use la carpeta views
app.set('view engine', 'pug');//usamos el metodo set de express para que use el motor de plantillas pug

app.use(express.json());//usamos el metodo use de express para que use el metodo json
app.use(express.urlencoded({extended: true})); // usamos el metodo use de express para que use el metodo urlencoded

app.get('/', (req, res) => {//usamos el metodo get de express para que cuando se introduzca / se ejecute la funcion que renderiza el archivo home.pug
    res.render('home')// renderizamos el archivo home.pug
    });


app.use('/', router);// usamos el metodo use de express para que cuando se introduzca / se ejecute el archivo router.js


app.listen(3000, () => {//usamos el metodo listen de express para que el servidor escuche en el puerto 3000
  console.log('servidor iniciado en el puerto 3000');
});