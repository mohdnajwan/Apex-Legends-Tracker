const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
require('dotenv/config');
const Profile = require('./routes/profile');

app.use(cors());

// Route
app.use('/api', Profile);

// Create Port
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
    // Set static folder
    app.use(express.static(path.join(__dirname, 'build')));
  
    app.get("*", (req, res) => {
        const index = path.join(__dirname, 'build', 'index.html');
        res.sendFile(index);
    });
}

// Listen / Create Server
app.listen(port,()=>{console.log(`Server nodejs running on port: ${port}`)});