const express = require('express');
const Furniture = require('../database-mongodb/Furniture');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/api/similarProducts/products/:id', (request, response) => {
    Furniture.find({id: request.params.id})
        .then((res) => {
            response.json(res);
        })
        .catch((error) => {
            response.end(error);
        });
});

app.post('/api/similarProducts/products/:id', (request, response) => {
    Furniture.create({id: request.params.id, name:'Cat Picture', category: 'animal', price: 250, rating: 4, imageUrl:'this url didnt work', onSale: true})
    .then((res) => {
        console.log('succes!', res)
        response.end()
    })
    .catch(error => {
        console.log(error)
        response.end()
    })
})
app.patch('/api/similarProducts/products/:id', (request, response) => {
    Furniture.updateMany({id: request.params.id}, {onSale: false})
    .then((res) => {
        console.log(res.n)
        console.log(res.nModified)
        response.end()
    })
    .catch(error => {
        console.log(error)
        response.end()
    })
})

app.delete('/api/similarProducts/products/:id', (request, response) => {
    Furniture.deleteMany({id: request.params.id})
    .then((res) => {
        console.log(res.deletedCount)
        response.end()
    })
    .catch(error => {
        console.log(error)
        response.end()
    })
})

app.get('/products/:id', (request, response) => {
    response.sendFile(path.join(__dirname, "/../client/dist", "index.html"));
});

module.exports = app;