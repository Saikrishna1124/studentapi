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

// server
const port = process.env.PORT || process.env.port || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});