import {Router} from 'express';

import aceitunasController from '../controllers/aceitunas/aceitunasController.js';
import isAuthenticated from '../middlewares/authMiddleware.js';
const router = Router();

router.get('/', (req, res) => {//get es un metodo de express
 aceitunasController.getAll(req, res);
});

router.get('/:id', (req, res) => {// al introducir el id se mostrara el tipo de aceituna
aceitunasController.getById(req, res);
});

router.post ("/", (req, res) => {//post es un metodo de express que sirve para insertar 
   aceitunasController.create(req, res);
});

router.put("/:id", (req, res) => {// put es un metodo de express que sirve para modificar 
    aceitunasController.update(req, res);
});
router.delete("/:id", (req, res) => {// delete es un metodo de express que sirve para eliminar
aceitunasController.remove(req, res);
});

export default router;