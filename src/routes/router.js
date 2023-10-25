import {Router} from 'express';

import aceitunasRouter from './aceitunasRouter.js';//importamos el archivo aceitunasRouter.js
import ciudadesRouter from './ciudadesRouter.js';//importamos el archivo ciudadesRouter.js

const router = Router();//creamos una constante router que sera igual a Router 

router.use('/aceitunas', aceitunasRouter);//usamos el metodo use de router para que cuando se introduzca /aceitunas se ejecute el archivo aceitunasRouter.js
export default router;

router.use('/ciudades', ciudadesRouter);//usamos el metodo use de router para que cuando se introduzca /ciudades se ejecute el archivo ciudadesRouter.js