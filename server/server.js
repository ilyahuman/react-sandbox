const express = require('express');
const bodyParser= require('body-parser');
const mongoose = require('mongoose');
const app = express();
const productRoutes = require('./routes/product')
const databaseUrl = 'mongodb+srv://root:root@test-database-s0ai1.mongodb.net/test?retryWrites=true&w=majority';

const main = async () => {

        await mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true })

        const db = mongoose.connection;

        db.once('connected', () => {
            console.log('Database connected:', databaseUrl)
        })

        db.on('error', (err) => {
            console.error('connection error:', err)
        })

        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());

        app.use('/products', productRoutes);

        app.listen(3000, function() {
            console.log('listening on 3000');
        });
}

main().catch(console.error);
