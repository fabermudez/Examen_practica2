const express = require('express');
const profesorRoute = require('./profesor.routes');

/* Router() permite acceder a: POST, PUT, DELETE, GET, GET{:id} */
function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/profesor', profesorRoute);
}

module.exports = routerApi;
