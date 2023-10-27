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

let aceitunas = [];
let maxId = 1;

for (let i = 0; i < 5; i++) {
    const newAceituna = {
        id: i + 1,
        tipo: nombreAceitunas[i],
        peso: Math.floor(Math.random() * 256),
    }
    aceitunas.push(newAceituna);
    maxId++;
}

const getAll = () => {// esta funcion sirve para devolver todas las aceitunas
    return [null, aceitunas];//devolvemos un array con el error a null y las aceitunas
}

const getById = (id) => {// esta funcion sirve para devolver una aceituna por su id
    try {
        const aceituna = (aceitunas.find(element => element.id == id));
        return [null, aceituna];
    }
    catch (e) {
        return [e.message, null];
    }
}

const create = (tipo, peso) => {// esta funcion sirve para insertar una aceituna
    if (!tipo || !peso) {// si no se envia el tipo o el peso de la aceituna
        const error = "falta el tipo o el peso de la aceituna";
        return [error, null];
    }
    const aceituna = {
        id: maxId++,
        tipo: tipo,
        peso,
    }
    aceitunas.push(aceituna);
    return [null, aceituna];
}

const update = (id, tipo, peso) => {// esta funcion sirve para modificar una aceituna por su id
    if(id === undefined){
        const error = "Tienes que especificar un ID válido";
        return [error,null];
    }
    if (tipo === undefined || peso === undefined) {
        const error = "Tipo y peso deben ser definidos";
        return [error, null];
    }
    try {
        const aceituna = (aceitunas.find(element => element.id === id));// guardamos en la variable aceituna el objeto que queremos modificar
        aceituna.tipo = tipo;// modificamos el tipo de aceituna
        aceituna.peso = peso;// modificamos el peso de la aceituna
        return [null, aceituna];
    }
    catch (e) {
        return [e.message,null]; 
    }
}

const remove = (id) => {// esta funcion sirve para eliminar una aceituna por su id
    try {
        const aceituna = aceitunas.find(element => element.id == id);// guardamos en la variable aceituna el objeto que queremos eliminar
        aceitunas = aceitunas.filter(element => element.id != id);// eliminamos la aceituna
        if(!aceituna) {
            const error = "no existe ninguna aceituna con ese id";
            return [error, null];
        }
        return [null, aceituna];
    }
    catch (e) {
        return [e.message, null];
    }
}

export default {
    getAll,
    getById,
    create,
    update,
    remove,
}