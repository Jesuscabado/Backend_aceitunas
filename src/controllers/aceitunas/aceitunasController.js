const nombreAceitunas = [
    "Manzanilla",
    "Gordal",
    "Hojiblanca",
    "Cacereña",
    "Verdial",
    "Aloreña",
    "Arbequina",
    "Cornicabra",
    "Picual",
    "Empeltre",
];

let aceitunas =[];
let maxId = 1;

        for (let i = 0; i < 5; i++) {
            const newAceituna ={
                id: i+1,
                tipo: nombreAceitunas[i],
                peso: Math.floor(Math.random() * 256),
            }
            aceitunas.push(newAceituna);
            maxId++;
        }
        

const getAll = async (req, res) => {// esta funcion sirve para devolver todas las aceitunas
    try {
        // falta la parte de los datos de la base de datos
        res.json(aceitunas);
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
}

const getById =  (req, res) => {// esta funcion sirve para devolver una aceituna por su id
    const id = req.params.id;
    try {
        const aceituna = (aceitunas.find(element => element.id == id));
        res.json(aceituna)
    }
    catch (e) 
    {
        res.status(400).send("id no valido");
    }
}

const create = (req, res) => {// esta funcion sirve para insertar una aceituna
    const {tipo, peso} = req.body;
    if(!tipo || !peso) {// si no se envia el tipo o el peso de la aceituna
        res.status(400).send("falta el tipo o el peso de la aceituna");
    }
    const aceituna = {
        id: maxId++,
        tipo: tipo,
        peso,
    }
    aceitunas.push(aceituna);
    res.json(aceituna);
}

const update = (req, res) => {// esta funcion sirve para modificar una aceituna por su id
    const id = req.params.id;
    const {tipo, peso} = req.body;
    if(!tipo || !peso)// si no se envia el tipo o el peso de la aceituna
        res.status(400).send("falta el tipo o el peso de la aceituna");
    try{
        const aceituna = (aceitunas.find(element => element.id ===id));// guardamos en la variable aceituna el objeto que queremos modificar
        aceituna.tipo = tipo;// modificamos el tipo de aceituna
        aceituna.peso = peso;// modificamos el peso de la aceituna
        res.json(aceituna);
    }
    catch (e) 
    {
        res.status(400).send("id no valido y que envias los datos'tipo' y 'peso'");
    }
}

const remove = (req, res) => {// esta funcion sirve para eliminar una aceituna por su id
    const id = req.params.id;
    try{
        const aceituna = aceitunas.find(element => element.id==id);// guardamos en la variable aceituna el objeto que queremos eliminar
        aceitunas= aceitunas.filter(element=> element.id!=id);// eliminamos la aceituna
        res.json(aceituna);
    }
    catch (e) 
    {
        res.status(400).send("id no valido");
    }
}

export default {
    getAll,
    getById,
    create,
    update,
    remove,
}