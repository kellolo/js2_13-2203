'use strict'

let burgers = []
let form = document.querySelector('form')
let toppings = []


//Собираем информацию о ценах и каллорийности из data атрибутов и прописываем в соответствующие блоки html
function getPriceAndEnergyInfo() {
  let labels = [...document.querySelectorAll('label')]
  labels.forEach(label => {
    let input = label.querySelector('input')
    let price = label.querySelector('.price')
    let energy = label.querySelector('.energy')
    price.textContent = input.dataset.price
    energy.textContent = input.dataset.energy
  })
}

//Подсвечиваем выбранные пункты
function showChecked() {
  let formInputs = document.querySelectorAll('input')
  formInputs.forEach(input => {
    if (input.checked) {
      input.parentNode.classList.add('checked')
    } else {
      input.parentNode.classList.remove('checked')
    }
  })
}

// Передаем стоимость и каллорийность для вывода на странице
function countCostAndEnergy() {
  let priceOutputField = document.querySelector('#cost')
  let energyOutputField = document.querySelector('#energy')
  let checkedItems = [...document.querySelectorAll('input:checked')]
  let cost = 0
  let energy = 0
  checkedItems.forEach(item => {
    cost += +item.dataset.price
    energy += +item.dataset.energy
  })
  priceOutputField.textContent = cost + ' $'
  energyOutputField.textContent = energy + ' cal'
}

//Отображает выбранные позиции на экране в поле вывода
function showChoosed(e) {  
  if (e.target.name == 'size') {
    let field = document.querySelector('.chosenSize').querySelector('span')
    field.textContent = e.target.value
  } else if (e.target.name == 'filling') {
    let field = document.querySelector('.chosenFilling').querySelector('span')
    field.textContent = e.target.value
  } else if (e.target.name == 'toppings') {
    let toppings = [...form.querySelector('#toppings').querySelectorAll('input:checked')]
    console.log(toppings)
    let field = document.querySelector('.chosenToppings').querySelector('span')
    field.textContent = ''
    toppings.forEach(topping => field.textContent += topping.value + ' | ')
  }
}



class Burger {
  constructor(size, filling, toppings, price, energy) {
    this.size = this._getData(size)
    this.filling = this._getData(filling)
    this.toppings = this._getDataToArray(toppings)
    this.cost = this._getSum(price)
    this.energy = this._getSum(energy)
  }
  _getData(param) {
    let item = document.querySelector(`input[name='${param}']:checked`)
    return item.value
  }
  _getDataToArray(param) {
    let arr = []
    let items = document.querySelectorAll(`input[name='${param}']:checked`)
    items.forEach(item => arr.push(item.value))
    return arr
  }
  _getSum(param) {
    let items = document.querySelectorAll(`input:checked`)
    let sum = 0
    items.forEach(item => sum += +item.dataset[param])
    return sum
  }
}

function createBurger() {
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    let burger = new Burger('size', 'filling', 'toppings', 'price', 'energy')
    burgers.push(burger)
    console.log('Get your burger!')
    console.dir(burgers)
    alert('Ваш бургер в консоли')
  })
}

function init() {
  getPriceAndEnergyInfo()
  form.addEventListener('input', showChecked)
  form.addEventListener('input', countCostAndEnergy)
  form.addEventListener('input', showChoosed)
  createBurger()
}

export default () => {
  init()
}