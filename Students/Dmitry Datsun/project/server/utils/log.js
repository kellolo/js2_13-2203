const fs = require('fs');

module.exports = async function(data) {
    try {
        await fs.appendFile('./server/db/log.txt', data + '\n',  err => {})
        return true;
    }
    catch(err) {
        console.log(err);
        return false;
    }
}
