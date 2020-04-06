'use strict'

const text = document.querySelector('p').textContent;
const regexp = /(\w+|\W)(')(\W|\w{2,})/g;
const newText = text.replace(regexp, '$1"$3');
document.querySelector('p').textContent = newText;
