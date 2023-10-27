import jwt from 'jsonwebtoken';

const loginApi = (req, res) => {
    const { username, password } = req.query;
    const token = jwt.sign({user:username},
    process.env.JSON_SECRET,
    {expiresIn: '30m'});
    res.json({token});
};

const login = (req, res) => {//creamos una funcion que se encargara de verificar si el token es valido
    const { username, password } = req.body;
    //comprobar que el usuario exsite y la contraseña es correcta
    /* if (username === 'admin' && password === '1234') {
        const token = jwt.sign({user:username}, process.env.JSON_SECRET,
        {expiresIn: '30m'});
        res.json({token});
    } else {
        res.status(401).json({message: 'Usuario o contraseña incorrectos'});
    } */
    req.session.user = username;
    res.redirect('/');
}

const loginForm = (req, res) => {//
    res.render('auth/login');
}

const logout = (req, res) => {
    req.session.destroy();
    res.redirect('/');
}
    
export default{
    login,
    loginApi,
    loginForm,
    logout
}