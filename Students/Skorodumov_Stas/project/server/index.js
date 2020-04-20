let express = require('express');
let fs = require('fs');

let server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('Hello server')
})

server.get('/catalog', (req, res) => {
    fs.readFile('./server/db/catalog.json', 'utf-8', (err, data) => {
        if (!err) {
            res.send(data)
        }
    })
})

server.post('/catalog', (req, res) => {
    fs.readFile('./server/db/catalog.json', 'utf-8', (err, data) => {
        if (!err) {
            let arr = JSON.parse(data);
            let item = req.body;
            item.id_product = Date.now();
            arr.push(item);
            fs.writeFile('./server/db/catalog.json', JSON.stringify(arr, null, ' '), err => {
                if (!err) {
                    res.json({
                        id: item.id_product
                    })
                } else {
                    res.sendStatus(500)
                }
            })
        }
    })
})
// server.get('/catalogData/:id', (req, res) => {
//     fs.readFile('./server/db/catalogData.json', 'utf-8', (err, data) => {
//         if(!err) {
//             let arr = JSON.parse(data);
//             let id = req.params.id;
//             let item = arr.find(el => el.id_product == id);
//             // res.send(JSON.stringify(item))
//             res.json(item);
//         }
//     })
// })

server.post('/catalog', (req, res) => {
    fs.readFile('./server/db/deleteFromBasket.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({
                result: 0
            }))
        } else {
            res.send(data)
        }
    })
})

server.listen(4000, () => {
    console.log('Server runs at 4000...')
})
