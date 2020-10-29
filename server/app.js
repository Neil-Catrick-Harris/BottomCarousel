const newRelic = require('newrelic')
const cassandra = require('cassandra-driver');
const PlainTextAuthProvider = cassandra.auth.PlainTextAuthProvider;
const client = new cassandra.Client({
    contactPoints:['127.0.0.1:9042'],
    localDataCenter: 'datacenter1',
    authProvider: new PlainTextAuthProvider('cassandra', 'cassandra')
})
const express = require('express');
const app = express();
const path = require('path');
const queryMaker = require('../database-cassandra/Query');
const { query } = require('express');

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/api/similarProducts/products/:id', (request, response) => {
    const infoHolder = []
    let counter = 0
    let querys = queryMaker(request.params.id)
    querys.forEach(query => {
        client.execute(query, (error, res) => {
            if (error) {
                console.error('error:', error)
                response.end('there was an error:', error)
            } else {
                if (res.rows[0] !== undefined) {
                    res.rows[0].rating = parseFloat(res.rows[0].rating)
                    res.rows[0].imageUrl = res.rows[0].imageurl
                    infoHolder.push(res.rows[0])
                    counter++
                }
                if (counter === querys.length) {
                    response.json(infoHolder)
                }
            }
        })
    })
    
});

app.post('/api/similarProducts/products/:id', (request, response) => {
    let query = `INSERT into furniturespace.furniture ("_id", ID, name) VALUES (${request.params.id}, 52,  \'meowri\');`
    client.execute(query, (error, res) => {
        if (error) {
            console.error('error:', error)
            response.end('there was an error:', error)
        } else {
            console.log('added or replaced')
            response.end()
        }
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