const { response, request } = require("express");
const bcryptjs = require("bcryptjs");

const Proyecto = require("../Models/proyecto");

const proyectosGet = async (req = request, res = response) => {
  console.log("GET DE PROYECTO");
  const { limite = 5, desde = 0 } = req.query;
  const query = { estado: true };

  const [total, proyectos] = await Promise.all([
    Proyecto.countDocuments(query),
    Proyecto.find(query),
    /*.skip( Number( desde ) )
            .limit(Number( limite ))*/
  ]);

  console.log(proyectos);
  res.json({
    nombre: "Edwin Alexis Garcia Guevara 17-29412-2017",
    total,
    proyectos,
  });
};

const proyectoInsertGT = async (req, res = response) => {
  const { codigo, nombreproyecto, monto } = req.body;
  const proyecto = new Proyecto({
    codigo,
    nombreproyecto,
    monto,
    fecha: new Date(),
    paisejecuta: "Guatemala",
    fechacierre: null,
  });
  // Guardar en BD

  console.log("Insert proyecto Guatemala");
  await proyecto.save();

  res.json({
    nombre: "Edwin Alexis Garcia Guevara 17-29412-2017",
    proyecto,
  });
};

const proyectoInsertCR = async (req, res = response) => {
  const { codigo, nombreproyecto, paisejecuta, fechacierre } = req.body;
  const proyecto = new Proyecto({
    codigo,
    nombreproyecto,
    monto: null,
    fecha: null,
    paisejecuta,
    fechacierre,
  });

  // Guardar en BD

  console.log("Insert proyecto Costa Rica");
  await proyecto.save();

  res.json({
    nombre: "Edwin Alexis Garcia Guevara 17-29412-2017",
    proyecto,
  });
};

const proyectoUpdate = async (req, res = response) => {
  console.log("Update proyectos");
  const { _id, codigo, nombreproyecto, paisejecuta, ...resto } = req.body;

  const proyecto = await Proyecto.findByIdAndUpdate(_id, resto);

  res.json({
    nombre: "Edwin Alexis Garcia Guevara 17-29412-2017",
    message: "Actualizacion generada correctamente.",
    proyecto,
  });
};

const proyectosDelete = async (req, res = response) => {
  const { id } = req.params;

  console.log("Delete proyectos : ", id);

  // Fisicamente lo borramos
  const usuario = await Proyecto.findByIdAndDelete(id);

  //const usuario = await Usuario.findByIdAndUpdate( id, { estado: false } );

  res.json({
    nombre: "Edwin Alexis Garcia Guevara 17-29412-2017",
    message: "Eliminacion de registro generada correctamente.",
    usuario,
  });
};

const proyectoPatch = (req, res = response) => {
  res.json({
    msg: "patch API - proyectoPatch",
  });
};

module.exports = {
  proyectosGet,
  proyectoInsertGT,
  proyectoInsertCR,
  proyectoUpdate,
  proyectosDelete,
  proyectoPatch,
};
