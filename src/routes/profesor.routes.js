const express = require('express');
const profesor_route = express.Router();
const profesorSchema = require('../models/profesorModels');

/* Ruta para crear un profesor*/
profesor_route.post('/profesor', (req, res) => {
  const profesor = profesor(req.body);
  profesor
    .save()
    .then((data) => res.json({ message: data }))
    .catch((error) => res.json({ message: error }));
});

/* Ruta para listar los profesor */
profesor_route.get('/', (req, res) => {
    profesorSchema
    .find()
    .then((data) => res.json({ message: data }))
    .catch((error) => res.json({ message: error }));
});

/* Ruta para consultar un profesor especifico*/
profesor_route.get('/:profesorId', (req, res) => {
  const { profesorId } = req.params;
  profesorSchema
    .findById(profesorId)
    .then((data) => res.json({ message: data }))
    .catch((error) => res.json({ message: error }));
});

/* Ruta para editar un profesor especifico*/
profesor_route.put('/:profesorId', (req, res) => {
  const { profesorId } = req.params;
  const {
    client_name,
    address = { city, code_zip, geo },
    contact = { email, cellphone},
  } = req.body;
  profesorSchema
    .updateOne(
      { _id: profesorId },
      { $set: { client_name, address, contact} }
    )
    .then((data) => res.json({ message: data }))
    .catch((error) => res.json({ message: error }));
});

/* Ruta para eliminar un profesor especifico*/
profesor_route.delete('/:profesorId', (req, res) => {
  const { profesorId } = req.params;
  profesorSchema
    .remove({ _id: profesorId })
    .then((data) => res.json({ message: data }))
    .catch((error) => res.json({ message: error }));
});

module.exports = profesor_route;
