let express = require('express')
let fs = require('fs')
let server = express()


let writer = require('./utils/writer.js')
let logger = require('./utils/logger.js')

let catalog = require('./services/catalog.js')
let cart = require('./services/cart.js')

server.use(express.json())

server.get('/catalog/', (req, res) => {
  fs.readFile('./server/db/catalog.json', 'utf-8', (err, data) => {
    if (!err) {
      res.send(data)
    }
  })
})

server.get('/catalog/:id', (req, res) => {
  fs.readFile('./server/db/catalog.json', 'utf-8', (err, data) => {
    if (!err) {
      let arr = JSON.parse(data)
      let id = req.params.id
      let item = arr.find(el => el.id_product == id)
      res.json(item)
    }
  })
})

server.post('/catalog', (req, res) => {
  fs.readFile('./server/db/catalog.json', 'utf-8', (err, data) => {
    if (!err) {
      let arr = JSON.parse(data)
      let item = req.body
      item.id_product = Date.now()
      arr.push(item)
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

server.get('/cart/', (req, res) => {
  fs.readFile('./server/db/cart.json', 'utf-8', (err, data) => {
    if (!err) {
      res.send(data)
    }
  })
})


server.post('/cart', (req, res) => {
  fs.readFile('./server/db/cart.json', 'utf-8', (err, data) => {
    if (!err) {
      let newCart = cart.add(JSON.parse(data), req.body)
      writer('./server/db/cart.json', newCart)
        .then(status => {
          if (status) {
            res.json({
              status: 1
            })
          } else {
            res.sendStatus(500)
          }
        })
        .then(() => {
          logger(req)
        })
    }
  })
})

server.delete('/cart/:id', (req, res) => {
  fs.readFile('./server/db/cart.json', 'utf-8', (err, data) => {
    if (!err) {
      let newCart = cart.delete(JSON.parse(data), req.params.id)
      writer('./server/db/cart.json', newCart)
        .then(status => {
          if (status) {
            res.json({
              status: 1
            })
          } else {
            res.sendStatus(500)
          }
        })
        .then(() => {
          logger(req)
        })
    }
  })
})

server.put('/cart/:id', (req, res) => {
  fs.readFile('./server/db/cart.json', 'utf-8', (err, data) => {
    if (!err) {
      let newCart = cart.change(JSON.parse(data), req.params.id, req.body.amount)
      console.log(newCart)
      writer('./server/db/cart.json', newCart)
        .then(status => {
          if (status) {
            res.json({
              status: 1
            })
          } else {
            res.sendStatus(500)
          }
        })
        .then(() => {
          logger(req)
        })
    }
  })
})

server.listen(3000)