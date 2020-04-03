let form = document.querySelector('#uForm')
let btn = document.querySelector('#okBtn')

btn.addEventListener('click', totalPrice)

function totalPrice() {
    let burgerPrice = Number(document.querySelector(`input[name='Size']:checked`).dataset["price"])
    let burgerCalories = Number(document.querySelector(`input[name='Size']:checked`).dataset["calories"])
    let fillerPrice = Number(document.querySelector(`input[name='Filler']:checked`).dataset["price"])
    let fillerCalories = Number(document.querySelector(`input[name='Filler']:checked`).dataset["calories"])
    let condimentsPrice = condo('price')
    let condimentsCalories = condo('calories')
    alert('Стоимость: ' + (burgerPrice + fillerPrice + condimentsPrice) + ' рублей;' + ' Всего калорий: ' + (burgerCalories + fillerCalories + condimentsCalories))
}

function condo(event) {
    let objArr = [...document.querySelectorAll(`input[name='Condiments']:checked`)]
    let k = 0
    for (i = 0; i < objArr.length; i++) {
        k += Number(objArr[i].dataset[event])
    }
    return k;
}