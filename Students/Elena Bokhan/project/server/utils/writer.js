let fs = require('fs');

module.exports = async function (url, arr) {
	try {
		await fs.writeFile(url, JSON.stringify(arr, null, ' '), err => {});
		return true
	}
	catch(err){		
		return false		
	}
}
