const Proyecto = require('../Models/proyecto');

const existeCodigo = async( id ) => {

    // Verificar si el correo existe
    const codigoExiste = await Proyecto.findOne(id);
    if ( !codigoExiste ) {
        res.json({
            message : "El codigo proporcionado ya existe"
        });
    }
}



module.exports = {
    existeCodigo
}

