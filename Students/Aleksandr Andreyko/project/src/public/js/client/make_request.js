function makeGETRequest(url) {
  return new Promise ((res, rej) => {
    var xhr;

    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) { 
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          res(xhr.responseText);
        } else {
          rej(xhr.status);
        }
      }
    }

    xhr.open('GET', url, true);
    xhr.send();
  })
}

export default makeGETRequest