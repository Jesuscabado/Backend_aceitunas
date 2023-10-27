import aceitunasController from "./aceitunasController.js";

const getAll = (req, res) => {// esta funcion sirve para devolver todas las aceitunas
    const [error, aceitunas] = aceitunasController.getAll();
    res.render("aceitunas/list", { error, aceitunas });
}

const getById = (req, res) => {// esta funcion sirve para devolver una aceituna por su id
    const id = req.params.id;
    const [error, aceituna] = aceitunasController.getById(id);
    if (error) {
        return res.redirect("/aceitunas");
    }
    res.render("aceitunas/show", { error, aceituna });
}

const createForm = (req, res) => {
    const error = req.query.error;
    res.render("aceitunas/create", { error });
}

const create = (req, res) => {// esta funcion sirve para insertar una aceituna
    const { tipo, peso } = req.body;
    const [error, aceituna] = aceitunasController.create(tipo, peso);
    if (error) {
        const uriError = encodeURIComponent(error);
        return res.redirect(`/aceitunas/create?error=${uriError}`);
        
    }
    res.redirect("/aceitunas");
}

const updateForm = (req, res) => {
    const errorMessage = req.query.error;
    const id = req.params.id;
    const [error, aceituna] = aceitunasController.getById(id);
    if (error) {
        res.redirect("/aceitunas");
    }
    res.render("aceitunas/update", { error:errorMessage, aceituna });
}

const update = (req, res) => {// esta funcion sirve para modificar una aceituna por su id
    const id = req.params.id;
    const { tipo, peso } = req.body;
    const [error, aceituna] = aceitunasController.update(id, tipo, peso);
    if (error) {
        const uriError = encodeURIComponent(error);
        return res.redirect(`/aceitunas/${id}/update?error=${uriError}`);
    }
    res.redirect(`/aceitunas/${id}`);
}

const remove = (req, res) => {// esta funcion sirve para eliminar una aceituna por su id
    const id = req.params.id;
    const [error, aceituna] = aceitunasController.remove(id);
    res.redirect("/aceitunas");
}

export default {
    getAll,
    getById,
    createForm,
    create,
    updateForm,
    update,
    remove
};