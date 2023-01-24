const express = require('express');
const bodyParser = require('body-parser');

const productRoutes = require('../authProject/product');
const authRoutes = require('./auth')
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(productRoutes);
app.use(authRoutes)
app.listen(3000);