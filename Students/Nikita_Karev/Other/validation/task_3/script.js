const form = document.forms.regform;
const errorAlert = document.getElementsByClassName('text-error');
const inputArea = document.getElementsByClassName('box-in');

//Очистка текста с ошибкой
const clearErrorAlert = () => {
    for (let i = 0; i < errorAlert.length; i++) {
        errorAlert[i].innerText = ' ';
    }
};

//Очистка рамки input
const clearInputArea = () => {
    for (let i = 0; i < inputArea.length; i++) {
        let classList = inputArea[i].classList;

        if (classList.contains('input_error') === true) {
            classList.remove("input_error");
            classList.remove("p_error");
        }
    }
};
 
const formValidation = (validate) => {
    validate.preventDefault();

    clearErrorAlert();
    clearInputArea();

    let name = form.elements.name;
    let mail = form.elements.email;
    let phone = form.elements.phone; 
    
    let result = true;

    if (nameValidation(name) === false) { result = false; }

    if (mailValidation(mail) === false) { result = false; }

    if (phoneValidation(phone) === false) { result = false; }

    if (result === false) {
        document.getElementById('box-in-head').innerText = "Данные не отправлены! Заполните все поля анкеты!"
    }
    if (result === true) {
        document.getElementById('box-in-head').innerText = "Данные приняты успешно!"
    }
    
    return result;
};

//Функции валидации
const nameValidation = (name) => {
    let regexp = /^[A-Za-zА-Яа-я ]+$/;

    if (name.value === '') {
        errorAlert[0].innerText = 'Заполните поле!';
        return false;
    }

    if (name.value.match(regexp)) { 
        return true;
    } else {
        errorAlert[0].innerText = 'Имя может содержать только буквы и пробел!';
        name.classList.add("input_error");
        name.classList.add("p_error");
        name.focus();
        return false;
    }
};
 
const mailValidation = (mail) => {
    let regexp = /^[-._A-Za-z0-9]+@(?:[A-Za-z0-9][-A-Z-a-z0-9]+\.)+[A-Za-z]{2,6}$/;
    
    if (mail.value === '') {
        errorAlert[1].innerText = 'Заполните поле!';
        return false;
    }

    if (mail.value.match(regexp)) { 
        return true;
    } else {
        errorAlert[1].innerText = 'Введите данные вашей почты корректно, используемые символы - [- _ . @]';
        mail.classList.add("input_error");
        mail.classList.add("p_error");
        mail.focus();
        return false;
    }
};
 
const phoneValidation = (phone) => {    
    let regexp = /^\+\d{1}\(\d{3}\)\d{3}-\d{4}$/;
    
    if (phone.value === '' ||  phone.value === '+7(000)000-0000') {
        errorAlert[2].innerText = 'Заполните поле!';
        return false;
    }

    if (phone.value.match(regexp)) { 
        return true;
    } else {
        errorAlert[2].innerText = 'Введите номер в формате +7(000)000-0000';
        phone.classList.add("input_error");
        phone.classList.add("p_error");
        phone.focus();
        return false;
    }
};