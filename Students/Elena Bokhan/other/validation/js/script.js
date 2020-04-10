"use strict";

let text = document.querySelector(".task-one").innerText;
const reg = /'(?=[^a-x])|(?<=[^a-x])'/g;
document.querySelector(".quotes").addEventListener("click", () => {
    document.querySelector(".task-one").innerText = text.replace(reg, '"');
})

//--------------------------------------------------------

document.querySelector(`button[type="submit"]`).disabled = true;

class ValideForm {
    constructor() {
        this.field = null;
        this.inputElem = null;
        this.init();
    }
    init() {
        this.handlerEvent();
    }
    handlerEvent() {
        document.addEventListener("keyup", (event) => {
            this.field = event.target.id;
            this.inputElem = event.target;
            this.value = event.target.value;
            this.getInput();
            this.unlockSubmit();
        });
        document.querySelector(`button[type="submit"]`).addEventListener("click", (event) => {
            alert("Форма успешно отправлена");
            // event.preventDefault();
        })
    }
    getInput() {
        if (this.field == "name") this.validateField(this.regName());
        else if (this.field == "phone") this.validateField(this.regPhone());
        else if (this.field == "e-mail") this.validateField(this.regEmail());
        else if (this.field == "text") this.validateField(this.regText());
    }
    regName() {        
        return /^([a-zа-яё ]+)$/;        
    }
    regPhone() {
        return /^(\+7\(\d{3}\)\d{3}-\d{4})$/;        
    }
    regEmail() {
        return /^([\w.-]+@m[\w]+.ru)$/;        
    }
    regText() {
       return /./;        
    }
    validateField(reg) {
        if (reg.test(this.value)) {
            this.inputElem.style.border = "3px solid green"
        } else {
            this.inputElem.style.border = "3px solid red"
        }
    }
    unlockSubmit() {
        let inputs = [...document.querySelectorAll("input")].filter(item => item.style.border == "3px solid green")
        if (inputs.length == 4) {
            document.querySelector(`button[type="submit"]`).disabled = false;
        }
    }
}
let valid = new ValideForm();