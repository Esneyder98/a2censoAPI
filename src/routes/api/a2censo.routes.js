const express = require('express');
const router = express.Router();
const cors = require('cors');
const a2censoAPIController = require('../../controllers/API/a2censoAPIController');

//Rutas
//Lista de todos registros de la tabla campaign con su orden por defecto
router.get('/',cors(),a2censoAPIController.list);
// create campaign
router.post('/create',cors(),a2censoAPIController.create);
// update campaign
router.patch('/update/:id',cors(),a2censoAPIController.update)
// delete campaign
router.delete('/delete/:id',cors(),a2censoAPIController.delete)
// orden Ascendente por columna amount
router.get('/amount/asc',cors(),a2censoAPIController.amountAsc);
// orden descentente por columna amount
router.get('/amount/desc',cors(),a2censoAPIController.amountDesc);
// orden Ascendente por columna requestedAmount
router.get('/requestedAmount/asc',cors(),a2censoAPIController.requestedAmountAsc);
// orden descentente por columna requestedAmount
router.get('/requestedAmount/desc',cors(),a2censoAPIController.requestedAmountDesc);
//detalle de un producto
router.get('/:id', cors(), a2censoAPIController.detail);
module.exports = router;