const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
require('dotenv/config');
const Profile = require('./routes/profile');

app.use(cors());


// Server Static File
app.use(express.static(path.join(__dirname, 'client/build')));

// Route
app.use('/api', Profile);

// Create Port
const port = 3001 || process.env.PORT;

// Handle any request that doesnt macth route
app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// Listen / Create Server
app.listen(port,()=>{console.log(`Server nodejs running on port: ${port}`)});