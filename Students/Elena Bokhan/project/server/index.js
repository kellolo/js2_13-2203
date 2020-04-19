let express = require('express');
let fs = require('fs');
let writer = require('./utils/writer.js');
let stats = require('./utils/stats.js');
let catalog = require('./services/catalog.js');
let cart = require('./services/cart.js');
let server = express();

server.use(express.json());

server.get('/catalog', (req, res) => {
    fs.readFile('./server/db/catalog.json', 'utf-8', (err, data) => {
        if (!err) {
            res.send(data);
        }
    })
})
server.get('/cart', (req, res) => {
    fs.readFile('./server/db/cart.json', 'utf-8', (err, data) => {
        if (!err) {
            res.send(data);
        }
    })
})

server.post('/catalog', (req, res) => {
    fs.readFile('./server/db/catalog.json', 'utf-8', (err, data) => {
        if (!err) {            
            let {newCatalog, idNew}= catalog.add(JSON.parse(data),req.body);
            writer('./server/db/catalog.json',newCatalog)
                .then(status => {
                    if (status) {
                        stats(req.body, 'Добавлен в каталог товаров');
                        res.json({ id: idNew });
                    } else {
                        res.sendStatus(500);
                    }
                })
        }
    })
})
server.post('/cart', (req, res) => {
    fs.readFile('./server/db/cart.json', 'utf-8', (err, data) => {
        if (!err) {
            let newCart= cart.add(JSON.parse(data),req.body);
            writer('./server/db/cart.json',newCart)            
            .then(status => {
                if (status) {
                    stats(req.body, 'Добавлен в корзину');
                    res.json({ status:1 });
                } else {
                    res.sendStatus(500);
                }
            })
        }
    })
})
server.put('/cart/:id', (req, res) => {
    fs.readFile('./server/db/cart.json', 'utf-8', (err, data) => {
        if (!err) {
            let {newCart,item}= cart.change(JSON.parse(data),req.params.id, req.body.amount);
            writer('./server/db/cart.json',newCart)
            .then(status => {
                if (status) {
                    stats(item, req.body.amount==1 ? 'Увеличили количество товара на 1':'Уменьшили количество товара на 1');
                    res.json({ status:1 });
                } else {
                    res.sendStatus(500);
                }
            })
        }
    })
})
server.delete('/cart/:id', (req, res) => {
    fs.readFile('./server/db/cart.json', 'utf-8', (err, data) => {
        if (!err) {
            let {newCart,item}= cart.delete(JSON.parse(data),req.params.id);
            writer('./server/db/cart.json',newCart)
            .then(status => {
                if (status) {
                    stats(item, 'Удален из корзины');
                    res.json({ status:1 });
                } else {
                    res.sendStatus(500);
                }
            })
        }
    })
})

server.listen(3000, () => { });