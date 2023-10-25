import {Router} from 'express';

const router = Router();

router.get('/', (req, res) => {//get es un metodo de express
    res.send('<h1>devolvemos todas las ciudades</h1>');
});

router.get('/:id', (req, res) => {// al introducir el id se mostrara el tipo de ciudad
    res.send('<h1>devolvemos la ciudad con id: ' + req.params.id + '</h1>');
});

router.post ("/", (req, res) => {//post es un metodo de express que sirve para insertar 
    res.send("<h1>Insertamos una nueva ciudad</h1>")
});

router.put("/:id", (req, res) => {// put es un metodo de express que sirve para modificar 
    res.send(`modificamos la ciudad con id: ${req.params.id}`)
});
router.delete("/:id", (req, res) => {// delete es un metodo de express que sirve para eliminar
    res.send(`eliminamos la ciudad con id: ${req.params.id}`)
});

export default router;