import jwt from 'jsonwebtoken';

const login = (req, res) => {
    const { username, password } = req.query;
    
        const token = jwt.sign({user:username}, process.env.JSON_SECRET,
        {expiresIn: '30m'});
        res.json({token});
    };

    export default{
        login
    }