const express = require("express");
const app = express();
const cors = require("cors");
// Declarando y requiriendo  la ruta principal 
const apiA2censoRouter = require("./routes/api/a2censo.routes");
//Declaracion del puerto en el cual correra el servidor
const port = process.env.PORT || 3000;
// middleware para manejo de datos en formato JSON
app.use(express.json());
// habilitar todas las solicitudes de tercerps a la API de manera Global
app.use(cors());
// indicandole al express que ruta usar
app.use("/api/v1/campaign", apiA2censoRouter);
// Poniendo a escuchar al servidor en el puerto previamente declarado
app.listen(port, () => console.log(`server is listening on ${port}`));
