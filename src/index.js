import express from 'express';

import router from './routes/router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {//
    res.send('<h1>LMLA:Liga Mundial de Lanzamiento de Aceitunas</h1>');
    });

app.use('/', router);// usamos el metodo use de express para que cuando se introduzca / se ejecute el archivo router.js


app.listen(3000, () => {
  console.log('servidor iniciado en el puerto 3000');
});