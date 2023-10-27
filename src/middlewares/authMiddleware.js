import jwt from 'jsonwebtoken';

/* const isAuthenticated = (req, res, next) => {//creamos una funcion que se encargara de verificar si el token es valido
    const token = req.query.token;
    try{
        const decoded = jwt.verify(token, process.env.JSON_SECRET);
        console.log(decoded);
        req.user = decoded;//guardamos el usuario en el objeto req
     next();
    }
    catch(e){
        res.status(401).send({error: 'Token inválido'});
    }
} */

const isAuthenticated = (req, res, next) => {//creamos una funcion que se encargara de verificar si el token es valido
    if(req.session.user){
        console.log("sesion",req.session);
        next();
    }
    else{
        res.redirect('/login');
    }
}



export default isAuthenticated;
