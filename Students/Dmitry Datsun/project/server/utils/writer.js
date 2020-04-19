const fs = require('fs');

module.exports = async function(url, data) {
    try {
        await fs.writeFile(url, JSON.stringify(data, null, ' '), err => {})
        return true;
    }
    catch(err) {
        console.log(err);
        return false;
    }
}
