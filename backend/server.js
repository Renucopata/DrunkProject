const express = require('express');
const app = express();
const cors = require('cors'); 
const port = 3001; 

app.use(cors());

app.get('/', (req, res) => {
  res.send('Prueba conexion front - back');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});