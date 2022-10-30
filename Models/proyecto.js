
const { Schema, model } = require('mongoose');

const ProyectoSchema = Schema({
    codigo: {
        type: String,
        required: [true, 'El codigo del proyecto es obligatorio']
    },
    nombreproyecto: {
        type: String,
        required: [true, 'El nombre del proyecto es obligatorio']
    },
    monto: {
        type: Number
    },
    fecha: {
        type: Date
    },
    paisejecuta: {
        type: String
    },
    fechacierre: {
        type: Date
    },
});



ProyectoSchema.methods.toJSON = function() {
    const { __v,  ...proyecto  } = this.toObject();
    return proyecto;
}

module.exports = model( 'Proyecto', ProyectoSchema );
