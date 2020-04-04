'use strict'

//XMLHttpRequest
const catalogUrl = './src/public/json/catalog.json';
const cartUrl = './src/public/json/getCart.json';
const addToCartUrl = './src/public/json/addToCart.json';
const delereFromCartUrl = './src/public/json/deleteFromCart.json';

function makeGETRequest(url) {
    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status == 200) {
                    let data = JSON.parse(xhr.responseText);
                    resolve(data);
                } else {
                    reject('Error ' + xhr.response);
                }
            }
        };

        xhr.open('GET', url, true);
        xhr.send();
    });
}

export const getCatalog = () => makeGETRequest(catalogUrl);
export const getCart = () => makeGETRequest(cartUrl);
export const addToCart = () => makeGETRequest(addToCartUrl); //post
export const deleteFromCart = () => makeGETRequest(delereFromCartUrl); //delete
