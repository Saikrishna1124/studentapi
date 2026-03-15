const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// database
const dbconfig = require('./dbconfig/dbconfig');
dbconfig.dbconnect();

// middleware
app.use(cors());
app.use(express.json());

// routes
const studentroute = require('./routes/studentroute');
app.use('/api/v1', studentroute);

// root test route (optional)
app.get('/', (req, res) => {
    res.send("Student API is running successfully");
});

// IMPORTANT FOR RENDER
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});