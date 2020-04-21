let express = require('express');
let fs = require('fs')
let writer = require('./utils/writer.js');
let log = require('./utils/log.js');
let catalog = require('./services/catalog.js');
let cart = require('./services/cart.js');

let server = express();

server.use(express.json());

server.get('/', (reg, res) => {
    res.send('Hello server')
})

server.get('/catalog', (req, res) => {
    fs.readFile('./server/db/catalog.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    })
})

server.get('/catalog/:id', (req, res) => {
    fs.readFile('./server/db/catalog.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(500);
        } else {
            let arr = JSON.parse(data);
            let id = req.params.id;
            let item = arr.find(x => x.id_product == id);
            // res.send(JSON.stringify(item));
            res.json(item);
        }
    })
})

server.get('/cart', (req, res) => {
    fs.readFile('./server/db/cart.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    })
})

server.get('/cart/:id', (req, res) => {
    fs.readFile('./server/db/cart.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(500);
        } else {
            let arr = JSON.parse(data);
            let id = req.params.id;
            let item = arr.find(x => x.id_product == id);
            res.json(item);
        }
    })
})

server.post('/catalog', (req, res) => {
    fs.readFile('./server/db/catalog.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(500);
        } else {
            let {newCatalog, idNew} = catalog.addItem(JSON.parse(data), req.body);
            writer('./server/db/catalog.json', newCatalog)
            .then(status => {
                if (status) {
                    res.json({id: idNew});
                } else {
                    res.sendStatus(500);
                }
            })
        }
    })
}) 

server.post('/cart', (req, res) => {
    fs.readFile('./server/db/cart.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(500);
        } else {
            let newCart = cart.addItem(JSON.parse(data), req.body);
            writer('./server/db/cart.json', newCart)
            .then(status => {
                if (status) {
                    log('Add item ' + JSON.stringify(req.body))
                    res.json({status: 1});
                } else {
                    res.sendStatus(500);
                }
            })
        }
    })
})

server.put('/cart/:id', (req, res) => {
    fs.readFile('./server/db/cart.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(500);
        } else {
            let Cart = cart.putItem(JSON.parse(data), req.params.id, req.body.amount);
            writer('./server/db/cart.json', Cart)
            .then (status => {
                if (status) {
                    let find = JSON.parse(data).contents.find(x => x.id_product == req.params.id);
                    log('Change item ' + JSON.stringify(find))
                    res.json({status: 1});
                } else {
                    res.sendStatus(500);
                }
            })
        }
    })
})

server.delete('/cart/:id', (req, res) => {
    fs.readFile('./server/db/cart.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(500);
        } else {
            let find = JSON.parse(data).contents.find(x => x.id_product == req.params.id);
            let Cart = cart.deleteItem(JSON.parse(data), req.params.id);
            writer('./server/db/cart.json', Cart)
            .then (status => {
                if (status) {
                    log('Remove item ' + JSON.stringify(find));
                    res.json({status: 1});
                } else {
                    res.sendStatus(500);
                }
            })
        }
    })
})


server.listen(3000, () => {
    log('Server runs at 3000...')
    console.log('Server runs at 3000...')
})
