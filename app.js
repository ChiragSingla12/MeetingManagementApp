const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const User = require('./models/user');
const Slots = require('./models/slotTable');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

Slots.hasMany(User);

sequelize
    // .sync({ force: true })
    .sync()
    .then(result => {
        // return User.findByPk(1);
        console.log(result);
    })
    .then(() => {
        app.listen(3000);
    })