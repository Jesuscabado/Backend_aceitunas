import {Router} from 'express';

import aceitunasViewController from '../controllers/aceitunas/aceitunasViewController.js';
import isAuthenticated from '../middlewares/authMiddleware.js';
const router = Router();

router.get('/',isAuthenticated, (req, res) => {//get es un metodo de express
 aceitunasViewController.getAll(req, res);
});

router.get('/:id', (req, res) => {// al introducir el id se mostrara el tipo de aceituna
aceitunasViewController.getById(req, res);
});

router.get('/create', (req, res) => {//get es un metodo de express
    aceitunasViewController.createForm(req, res);
});

router.post ("/", (req, res) => {//post es un metodo de express que sirve para insertar 
   aceitunasViewController.create(req, res);
});

router.get('/:id/update', (req, res) => {// al introducir el id se mostrara el tipo de aceituna
    aceitunasViewController.updateForm(req, res);
});

router.post("/:id", (req, res) => {// put es un metodo de express que sirve para modificar 
    aceitunasViewController.update(req, res);
});
router.get("/:id/delete", (req, res) => {// delete es un metodo de express que sirve para eliminar
aceitunasViewController.remove(req, res);
});

export default router;