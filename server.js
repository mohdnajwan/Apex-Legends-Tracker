const express = require('express');
const app = express();
require('dotenv/config');
const Profile = require('./routes/profile');

// Route
app.use('/api', Profile);

// Create Port
const port = 3001 || process.env.PORT;

// Listen / Create Server
app.listen(port,()=>{console.log(`Server nodejs running on port: ${port}`)});