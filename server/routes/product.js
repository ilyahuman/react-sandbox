const express = require('express')
const router = express.Router();
const Product = require('../models/Product')

const data = [
    {
        "image": "https://image.shutterstock.com/z/stock-photo-pair-of-white-sneakers-isolated-on-white-background-sport-shoes-712448377.jpg",
        "name": "Sport Shoes",
        "price": 110
    },
    {
        "image": "https://image.shutterstock.com/z/stock-photo-vintage-red-shoes-on-white-background-92008067.jpg",
        "name": "Red SNEAKER",
        "price": '91'
    },
    {
        "image": "https://image.shutterstock.com/z/stock-photo-pink-and-black-sport-woman-shoes-isolated-on-white-background-709418083.jpg",
        "name": "Sport Shoes Women",
        "price": '94'
    },
    {
        "image": "https://image.shutterstock.com/z/stock-photo-children-s-autumn-or-winter-fashion-boots-isolated-on-white-background-708900334.jpg",
        "name": "Winter boots children",
        "price": '143'
    },
    {
        "image": "https://image.shutterstock.com/z/stock-photo-bangkok-thailand-january-onitsuka-tiger-asics-gel-lyte-iii-on-january-in-bangkok-292088969.jpg",
        "name": "Sports shoes Red-White",
        "price": '150'
    },
    {
        "image": "https://image.shutterstock.com/z/stock-photo-leather-shoes-isolated-on-white-background-including-clipping-path-216565609.jpg",
        "name": "Black leather shoes",
        "price": '250'
    },
    {
        "image": "https://image.shutterstock.com/z/stock-photo-casual-shoes-on-white-background-included-clipping-path-667459072.jpg",
        "name": "Shoes Canvas",
        "price": '50'
    },
    {
        "image": "https://image.shutterstock.com/z/stock-photo-white-sneakers-on-white-background-including-clipping-path-1100736923.jpg",
        "name": "Shoes White",
        "price": '85'
    },
    {
        "image": "https://image.shutterstock.com/z/stock-photo-yellow-sneakers-15066415.jpg",
        "name": "Sneakers Yellow",
        "price": '125'
    }
]

router.post('/set', async (req, res) => {
    Product.insertMany(data);
    res.send('set')
})

router.post('/clear', (req, res) => {
    Product.remove({});
    res.send('Clear')
})

router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/', async (req, res) => {
    const { name, price, image } = req.body;
    const product = await new Product({
        name: name,
        price: price,
        image: image
    })

    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;