import {Router} from 'express';

import aceitunasRouter from './aceitunasRouter.js';//importamos el archivo aceitunasRouter.js
import authRouter from './authRouter.js';//importamos el archivo authRouter.js
import ciudadesRouter from './ciudadesRouter.js';//importamos el archivo ciudadesRouter.js

const router = Router();//creamos una constante router que sera igual a Router 

router.use('/aceitunas', aceitunasRouter);//usamos el metodo use de router para que cuando se introduzca /aceitunas se ejecute el archivo aceitunasRouter.js
router.use('/ciudades', ciudadesRouter);//usamos el metodo use de router para que cuando se introduzca /ciudades se ejecute el archivo ciudadesRouter.js
router.use('/', authRouter);//usamos el metodo use de router para que cuando se introduzca /auth se ejecute el archivo authRouter.js

export default router;