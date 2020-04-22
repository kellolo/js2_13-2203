let express = require('express')
let fs = require('fs')
let server = express()

server.use(express.json())

function totalAmount(arr) {
  let total = 0
  arr.forEach(elem => (total += elem.quantity))
  return total
}

function totalCost(arr) {
  let total = 0
  arr.forEach(elem => (total += elem.price * elem.quantity))
  return total
}

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
      // res.send(JSON.stringify(item))
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
      let cartOnServer = JSON.parse(data)
      let incomeData = req.body
      let id = +incomeData.id_product
      let find = cartOnServer.contents.find(elem => elem.id_product === id)
      if (find) {
        find.quantity++
      } else {
        cartOnServer.contents.push({
          ...incomeData,
          quantity: 1
        })
      }
      cartOnServer.countGoods = totalAmount(cartOnServer.contents)
      cartOnServer.amount = totalCost(cartOnServer.contents)
      fs.writeFile('./server/db/cart.json', JSON.stringify(cartOnServer, null, ' '), err => {
        if (!err) {
          res.json(cartOnServer)
        } else {
          res.sendStatus(500)
        }
      })
    }
  })
})

server.delete('/cart', (req, res) => {
  fs.readFile('./server/db/cart.json', 'utf-8', (err, data) => {
    if (!err) {
      let cartOnServer = JSON.parse(data)
      let incomeData = req.body
      let id = +incomeData.id_product
      let find = cartOnServer.contents.find(elem => elem.id_product === id)
      if (find.quantity > 1) {
        find.quantity--
      } else {
        cartOnServer.contents.splice(cartOnServer.contents.indexOf(find), 1)
      }
      cartOnServer.countGoods = totalAmount(cartOnServer.contents)
      cartOnServer.amount = totalCost(cartOnServer.contents)
      fs.writeFile('./server/db/cart.json', JSON.stringify(cartOnServer, null, ' '), err => {
        if (!err) {
          res.json(cartOnServer)
        } else {
          res.sendStatus(500)
        }
      })
    }
  })
})

server.listen(3000)