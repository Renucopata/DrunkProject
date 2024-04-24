const express = require('express');
const app = express();
const cors = require('cors'); 
const port = 3001; 

app.use(cors());

app.get('/', (req, res) => {
  res.send('Prueba conexion front - back jotace marica');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.post('/api/login', (req, res) => {
    // Authenticate the user based on the provided credentials
    // If authentication is successful, generate a token or session
    // Return the token or session to the front-end
  });
  