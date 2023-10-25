import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('<h1>LMLA:Liga Mundial de Lanzamiento de Aceitunas</h1>');
    });


app.listen(3000, () => {
  console.log('servidor iniciado en el puerto 3000');
});