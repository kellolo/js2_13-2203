let express = require('express');
let fs = require('fs');

let server = express();

server.use(express.json());

server.get('/catalog', (req, res) => {
    fs.readFile('./server/db/catalog.json', 'utf-8', (err, data) => {
        if (!err) {
            res.send(data)
        }
    })
})
server.get('/cart', (req, res) => {
    fs.readFile('./server/db/cart.json', 'utf-8', (err, data) => {
        if (!err) {
            res.send(data)
        }
    })
})
// получить конкретный товар
server.get('/catalog/:id', (req, res) => {
    fs.readFile('./server/db/catalog.json', 'utf-8', (err, data) => {
        if (!err) {
            let arr = JSON.parse(data);
            let id = req.params.id;
            let item = arr.find(elem => elem.id_product == id);
            res.json(item);
        }
    })
})
// получить конкретный товар корзины
server.get('/cart/:id', (req, res) => {
    fs.readFile('./server/db/cart.json', 'utf-8', (err, data) => {
        if (!err) {
            let objcart = JSON.parse(data);
            let arr = objcart.contents;
            let id = req.params.id;            
            let item = arr.find(elem => elem.id_product == id);
            arr.splice(arr.indexOf(item), 1);
            fs.writeFile('./server/db/cart.json', JSON.stringify(objcart, null, ' '), err => {
                if (!err) {
                    res.json(item)
                } else {
                    res.sendStatus(500)
                }
            })
        }
    })
})

server.post('/catalog', (req, res) => {
    fs.readFile('./server/db/catalog.json', 'utf-8', (err, data) => {
        if (!err) {
            let arr = JSON.parse(data);
            let item = req.body;
            item.id_product = parseInt(new Date().getTime() / 1000);
            arr.push(item);
            fs.writeFile('./server/db/catalog.json', JSON.stringify(arr, null, ' '), err => {
                if (!err) {
                    res.json({ id: item.id_product })
                } else {
                    res.sendStatus(500)
                }
            })

        }
    })
})
server.post('/cart', (req, res) => {
    fs.readFile('./server/db/cart.json', 'utf-8', (err, data) => {
        if (!err) {
            let objcart = JSON.parse(data);
            let arr = objcart.contents;
            let item = req.body;
            arr.push(item);
            fs.writeFile('./server/db/cart.json', JSON.stringify(objcart, null, ' '), err => {
                if (!err) {
                    res.json(item)
                } else {
                    res.sendStatus(500)
                }
            })

        }
    })
})


server.listen(3000, () => { })