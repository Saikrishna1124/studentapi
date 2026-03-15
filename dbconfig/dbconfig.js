const mongoose = require('mongoose');
require('dotenv').config();

exports.dbconnect = () => {
    mongoose.connect(process.env.dburl)
        .then(() => {
            console.log('Connection is successed!');
        })
        .catch((err) => {
            console.log('Database Connection Failed');
            console.error(err.message);
            process.exit(1);
        });
};