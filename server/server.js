const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const initDb = require('./db/db');
const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user');

const main = async () => {
        initDb();

        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        app.use(express.urlencoded({ extended: true }));
        app.use(express.json());

        app.use('/products', productRoutes);

        app.use('/user', userRoutes);

        app.listen(4000, () => {
            console.log('listening on 4000');
        });
}

main().catch(console.error);
