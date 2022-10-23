const { Router } = require("express");
const { check } = require("express-validator");


const {
  proyectosGet,
  proyectoInsertGT,
  proyectoInsertCR,
  proyectoUpdate,
  proyectosDelete,
  proyectoPatch,
} = require("../Controllers/proyecto");

const router = Router();

router.get("/GetProyectos/", proyectosGet);

router.post("/InsertProyectoGuetamala/", proyectoInsertGT);

router.post("/InsertProyectoCostaRica/", proyectoInsertCR);

router.put("/UpdateProyecto/", proyectoUpdate);

router.delete("/DeleteProyecto/:id", proyectosDelete);

router.patch("/", proyectoPatch);

module.exports = router;
