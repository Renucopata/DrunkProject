const express = require('express');
const app = express();
const cors = require('cors'); 
const port = 3001; 
const authRoutes = require('./routes/jwtAuth');
const db = require('./db');

//middleware

app.use(cors());
app.use(express.json());

/*app.get('/', (req, res) => {
  res.send('Prueba conexion front - back');
});*/

//routes

app.use("/api/jwtAuth",authRoutes);

db.connect();



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

  