const express = require('express');
const bodyParser = require('body-parser');

const productRoutes = require('../auth/product');
const authRoutes = require('../auth/product')
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(productRoutes);
app.use(authRoutes)
app.listen(3000);