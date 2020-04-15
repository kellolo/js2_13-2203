let strMessage = `Албания связывает диспозитивный имидж. 'Опыт разрушаем'. Учитывая, что (sin x)' = cos x, возмущение плотности выслеживает конструктивный верлибр, на этих моментах останавливаются Мазель и Цуккерман в своем учебнике 'Анализ музыкальных произведений'.`

document.getElementById('user-text').innerHTML = strMessage;

regText = (strMessage) => {
    strMessage = strMessage.replace(/'(\W+)'/g, '"$1"')
    console.log(strMessage)
    document.getElementById('user-text').innerHTML = strMessage
}

// Проверка,чтобы не было отправки пустой формы
window.onload = () => {
    document.querySelector('#message-form').addEventListener('submit', e => {
        let valid = new Validator('message-form');
        console.log(valid)
        if (!valid.valid) {
            e.preventDefault();
        }
    })
}

// Конструктор для проверки паттерна в строке ввода
class Validator {
    constructor(form) {
        this.patterns = {
            name: /^[a-zа-яё]+$/i,
            phone: /^\+7\(\d{3}\)\d{3}-\d{4}$/,
            email: /^[\w._-]+@\w+\.[a-z]{2,4}$/
        }

        this.errors = {
            name: 'Имя содержит только буквы',
            phone: 'Шаблон телефона +7(000)000-0000',
            email: 'Шаблон e-mail mymail@mail.ru, my.mail@mail.ru, my-mail@mail.ru'
        }

        this.errorClass = 'error-msg'
        this.form = form
        this.valid = false
        this._validateForm()
    }

    _validateForm() {
        let errors = [...document.getElementById(this.form).querySelectorAll(`.${this.errorClass}`)]
        for (let error of errors) {
            error.remove()
        }

        let formFields = [...document.getElementById(this.form).querySelectorAll('input')]
        formFields.forEach(el => {
            this._validateField(el)
        })

        if (![...document.getElementById(this.form).querySelectorAll('.invalid')].length) {
            this.valid = true
        }
    }

    _validateField(field) {
        if (this.patterns[field.name]) {
            if (!this.patterns[field.name].test(field.value)) { // regExp.test (string) // true - если совпадение / false - если "не думаю"
                field.classList.add('invalid')
                this._addErrorMsg(field)
                this._watchField(field)
            }
        }
    }

    _addErrorMsg(field) {
        field.parentNode.insertAdjacentHTML('beforeend', `<div class="${this.errorClass}">${this.errors[field.name]}</div>`)
    }

    _watchField(field) {
        field.addEventListener('input', () => {
            let error = field.parentNode.querySelector(`.${this.errorClass}`)
            if (this.patterns[field.name]) {
                if (this.patterns[field.name].test(field.value)) {
                    field.classList.remove('invalid')
                    field.classList.add('valid')
                    if (error) error.remove()
                } else {
                    field.classList.remove('valid')
                    field.classList.add('invalid')
                    if (!error) this._addErrorMsg(field)
                }
            }
        })
    }
}