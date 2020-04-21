let fs = require('fs');
var moment = require('moment');


module.exports = async function (item,str) {
	fs.readFile('./server/db/stats.json', 'utf-8', (err, data) => {
        if (!err) {
			let arr = JSON.parse(data);
			let time =moment().format('MMMM Do YYYY, h:mm:ss a');
			item={operation:str,product:item.product_name,time};
			arr.push(item);
            fs.writeFile('./server/db/stats.json', JSON.stringify(arr, null, ' '), err => {});
        }
    })	
}
