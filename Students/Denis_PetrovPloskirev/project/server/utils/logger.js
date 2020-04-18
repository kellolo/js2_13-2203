let fs = require('fs')

module.exports = async function (req) {
    try {
        await fs.readFile('./server/db/log.json', 'utf-8', (err, data) => {
          if (!err) {
            let loggerContent = JSON.parse(data)
            let message = ''
            if (req.body.amount) {
              message = `changed quantity ${req.body.amount}`
            } else if (req.params.id) {
              message = `removed from cart`
            } else {
              message = 'added to cart'
            }
            let newLog = {
              "time": new Date(),
              "id_product": req.params.id || req.body.id_product,
              "product_name": req.params.id ? loggerContent.find(el => el.id_product == req.params.id).product_name : req.body.product_name,
              "operation": message
            }
            loggerContent.push(newLog)
            fs.writeFile('./server/db/log.json', JSON.stringify(loggerContent, null, ' '), err => {})
          }
        })
    }
    catch(err) {
        console.log(err)
    }
}