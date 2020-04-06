'use strict'

const name = document.querySelector('#name');
name.addEventListener('input', checkLetters);

function checkLetters(evt) {
    const regexpForName = /^[a-zA-Zа-яА-Я]+$/g;

    const check = regexpForName.test(evt.target.value);
    if (!check) {
        name.classList.add('invalid');
    } else {
        name.classList.remove('invalid');
    }
}

const phone = document.querySelector('#phone');
phone.addEventListener('change', checkNumbers);

function checkNumbers(evt) {
    const regexpForPhone = /^\+7\(\d{3}\)\d{3}-\d{4}$/;

    const check = regexpForPhone.test(evt.target.value);
    if (!check) {
        phone.classList.add('invalid');
    } else {
        phone.classList.remove('invalid');
    }
}

const email = document.querySelector('#email');
email.addEventListener('change', checkEmail);

function checkEmail(evt) {
    const regexpForEmail = /[a-z\.\-\d]+@[a-z\d]+\.[a-z]{2,}/;

    const check = regexpForEmail.test(evt.target.value);
    if (!check) {
        email.classList.add('invalid');
    } else {
        email.classList.remove('invalid');
    }
}
