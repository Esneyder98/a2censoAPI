const express = require('express');
const app = express()
const cors = require('cors')

const apiA2censoRouter = require('./routes/api/a2censo.routes')
//Declaracion del puerto en el cual correra el servidor
const port = process.env.PORT || 3000;
// middleware para manejo de datos en formato JSON
app.use(express.json());
// habilitar todas las solicitudes de la API de manera Global
app.use(cors());



app.use('/api/v1/campaign',apiA2censoRouter);   


app.listen(port, () =>console.log(`server is listening on ${port}`));