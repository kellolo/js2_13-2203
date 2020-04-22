let fs = require('fs');
let moment = require('moment');

module.exports = async function (req) {
    try {
          fs.readFile('./server/db/logs.json', 'utf-8', (err, data) => {
          if (!err) {
            let loggerData = JSON.parse(data)
            let operationText = ''
            if (req.body.amount) {
              operationText = `quantity was changed ${req.body.amount}`
            } else if (req.params.id){
              operationText = `item was removed from cart`
            } else {
              operationText = `item was added to cart`
            }
            let newLog = {
              "time": moment().format('LLLL'),
              "id_product": req.params.id || req.body.id_product,
              "product_name": req.params.id ? loggerData.find(el => el.id_product == req.params.id).product_name : req.body.product_name,
              "operation": operationText
            }
            loggerData.push(newLog)
            fs.writeFile('./server/db/logs.json', JSON.stringify(loggerData, null, ' '), err => {})
          }
        })
    }
    catch(err) {
        console.log(err)
    }
}