let express = require('express');
let fs = require('fs');
let writer = require('./utils/writer.js');

let catalog = require('./services/catalog.js');
let cart = require('./services/cart.js');
let server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('Hello server')
})

server.get('/catalog', (req, res) => {
    fs.readFile('./server/db/catalog.json', 'utf-8', (err, data) => {
        if(!err) {
            res.send(data)
        }
    })
})

server.get('/cart', (req, res) => {
    fs.readFile('./server/db/cart.json', 'utf-8', (err, data) => {
        if(!err) {
            res.send(data)
        }
    })
})

server.post('/catalog', (req, res) => {
    fs.readFile('./server/db/catalog.json', 'utf-8', (err, data) => {
        if(!err) {
            let { newCatalog, idNew } = catalog.add(JSON.parse(data), req.body);
            writer('./server/db/catalog.json', newCatalog)
                .then (status => {
                    if (status) {
                        res.json({id: idNew});
                    } else {
                        res.sendStatus(500);
                    }
                })
        }
    })
})

server.post ('/cart', (req, res) => {
    fs.readFile('./server/db/cart.json', 'utf-8', (err, data) => {
        if(!err) {
            let newCart = cart.add(JSON.parse(data), req.body);
            writer('./server/db/cart.json', newCart)
                .then (status => {
                    if (status) {
                        res.json({status: 1});
                    } else {
                        res.sendStatus(500);
                    }
                })
        }
    })
})

server.delete ('/cart/:id', (req, res) => {
    fs.readFile('./server/db/cart.json', 'utf-8', (err, data) => {
        if(!err) {
            let newCart = cart.delete(JSON.parse(data), req.params.id);
            writer('./server/db/cart.json', newCart)
                .then (status => {
                    if (status) {
                        res.json({status: 1});
                    } else {
                        res.sendStatus(500);
                    }
                })
        }
    })
})

server.put ('/cart/:id', (req, res) => {
    fs.readFile('./server/db/cart.json', 'utf-8', (err, data) => {
        if(!err) {
            let newCart = cart.add(JSON.parse(data), req.params.id, req.body.amount);
            writer('./server/db/cart.json', newCart)
                .then (status => {
                    if (status) {
                        res.json({status: 1});
                    } else {
                        res.sendStatus(500);
                    }
                })
        }
    })
})
server.listen(3000, () => {
    console.log('Server runs at 3000...')
})
