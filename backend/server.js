const express = require('express');
const app = express();
const cors = require('cors'); 
const port = 3001; 
const authRoutes = require('./routes/jwtAuth');
const dashboardRoutes = require('./routes/dashApis');
const convoRoutes = require('./routes/convoApis');
const db = require('./db');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

//swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//middleware

app.use(cors());
app.use(express.json());

/*app.get('/', (req, res) => {
  res.send('Prueba conexion front - back');
});*/

//routes

app.use("/api/jwtAuth", authRoutes);
app.use("/api/dashApis", dashboardRoutes);
app.use("/api/convoApis", convoRoutes)

db.connect();



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

  