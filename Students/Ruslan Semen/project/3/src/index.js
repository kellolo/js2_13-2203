import './public/css/style.css'
import './public/css/normalize.css'
import app from './public/js/app.js'

app();

let url = "../catalog.json";

function makeGETRequest(url, callback) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {

        if (xhr.readyState === 4) {
            console.log(xhr);
            console.log(xhr.responseText);
            let a = JSON.parse(xhr.responseText);
            console.log(a);
            console.log(JSON.stringify(a));
        }
    }

    xhr.open("GET", url, true);
    xhr.send();
}
makeGETRequest(url);