let express = require('express');
let fs = require('fs');

let server = express();

server.use(express.json());

server.get('/catalog', (req, res) => {
    fs.readFile('./server/db/catalog.json', 'utf-8', (err, data) => {
        if(!err) {
            res.send(data)
        }
    })
});

server.get('/cart', (req, res) => {
    fs.readFile('./server/db/cart.json', 'utf-8', (err, data) => {
        if(!err) {
            res.send(data)
        }
    })
});

server.post('/catalog', (req, res) => {
    fs.readFile('./server/db/catalog.json', 'utf-8', (err, data) => {
        if(!err) {
            let arr = JSON.parse(data);
            let item = req.body;
            item.id_product = Date.now();
            arr.push(item);
            fs.writeFile('./server/db/catalog.json', JSON.stringify(arr, null, ' '), err => {
                if(!err) {
                    res.json({id: item.id_product})
                } else {
                    res.sendStatus(500)
                }
            })
        }
    })
});

server.post('/cart', (req, res) => {
    fs.readFile('./server/db/cart.json', 'utf-8', (err, data) => {
        if(!err) {
            let cartArr = JSON.parse(data);
            let basketArr = cartArr.contents;
            let item = req.body;
            basketArr.push({...item, quantity: 1});
            fs.writeFile('./server/db/cart.json', JSON.stringify(cartArr, null, ' '), err => {
                if(!err) {
                    res.sendStatus(200)
                } else {
                    res.sendStatus(500)
                }
            })
        }
    })
});

server.listen(3000, () => {
    console.log('Server runs at 3000...')
});