'use strict';

let url = 'https://raw.githubusercontent.com/ploskirev/api/master/burgers/all.json'


class Menu {
  constructor(container, url) {
    this.container = document.querySelector(container)
    this.url = url
    this.chosedMeals = []
    this._init()
  }

  _loadData(url) {
    return new Promise((res, rej) => {
      let xhr = new XMLHttpRequest()
      xhr.open('GET', url, true)
      xhr.send()
      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
          xhr.status == 200 ? res(JSON.parse(xhr.responseText)) : rej(`Проблемы с ответом от сервера`)
        }
      }
    })
  }

  _handleData(data) {
    this.data = []
    data.forEach(item => {
      if (!this.data[item.optionName]) {
        this.data[item.optionName] = []
      }
      this.data[item.optionName].push(item)
    })
  }

  _render() {
    for (let key in this.data) {
      let str = `<h2>${key}</h2>`
      this.data[key].forEach(item => {
        str += `<label id="${item.name}" class="${item.optionName}">
          <div class="info price">${item.price}</div>
          <div class="info energy">${item.energy}</div>
          ${item.name} <input type="${item.optionName == 'toppings' ? 'checkbox' : 'radio'}" name="${item.optionName}" value="${item.name}" data-price="${item.price}" data-energy="${item.energy}">
        </label>`
      })
      let container = document.querySelector(`#${key}`)
      container.innerHTML = str
    }
  }

  _setLabelSizes() {
    let baseHeight = 15.5
    let menuOptions = this.container.querySelectorAll('.fieldset')
    menuOptions.forEach(fieldset => {
      let menuOptionItems = fieldset.querySelectorAll('label')
      let heightCorr = Math.ceil(menuOptionItems.length / 3)
      menuOptionItems.forEach(item => {
        item.style.height = baseHeight / heightCorr + 'vh'
        if (heightCorr > 1) {
          let priceBlck = item.querySelector('.price')
          let energyBlck = item.querySelector('.energy')
          item.style.backgroundPosition = '50% 10%'
        item.style.backgroundSize = '4.5vh'
          item.style.paddingBottom = '0'
          priceBlck.style.left = 10 + 'px'
          priceBlck.style.top = 30 + 'px'
          energyBlck.style.left = 10 + 'px'
          energyBlck.style.top = 10 + 'px'
        }
      })
    })
  }

  _showChecked() {
    let formInputs = this.querySelectorAll('input')
    formInputs.forEach(input => {
      if (input.checked) {
        input.parentNode.classList.add('checked')
      } else {
        input.parentNode.classList.remove('checked')
      }
    })
  }

  _countCostAndEnergy() {
    let priceOutputField = this.querySelector('#cost')
    let energyOutputField = this.querySelector('#energy')
    let checkedItems = [...this.querySelectorAll('input:checked')]
    let cost = 0
    let energy = 0
    checkedItems.forEach(item => {
      cost += +item.dataset.price
      energy += +item.dataset.energy
    })
    priceOutputField.textContent = cost + ' $'
    energyOutputField.textContent = energy + ' cal'
  }

  _showChoosed(e) {
    if (e.target.name == 'size') {
      let field = this.querySelector('.chosenSize').querySelector('span')
      field.textContent = e.target.value
    } else if (e.target.name == 'filling') {
      let field = this.querySelector('.chosenFilling').querySelector('span')
      field.textContent = e.target.value
    } else if (e.target.name == 'toppings') {
      let toppings = [...this.querySelector('#toppings').querySelectorAll('input:checked')]
      let field = this.querySelector('.chosenToppings').querySelector('span')
      field.textContent = ''
      toppings.forEach((topping, index) => {
        field.textContent += topping.value
        if (index < toppings.length - 1) {
          field.textContent += ' | '
        }
      })
    }
  }

  _makeBurger(e) {
    e.preventDefault()
    let burger = new Burger('size', 'filling', 'toppings', 'price', 'energy')
    this.chosedMeals.push(burger)
    console.log('Get your burger!')
    console.dir(this.chosedMeals)
    alert('Ваш бургер в консольке')
  }

  _init() {
    this._loadData(this.url)
      .then((data) => this._handleData(data))
      .then(() => this._render())
      .then(() => this._setLabelSizes())
      .then(() => console.info('Промис завершен успешно'))
      .catch((error) => console.error(error))
    this.container.addEventListener('input', this._showChecked)
    this.container.addEventListener('input', this._countCostAndEnergy)
    this.container.addEventListener('input', this._showChoosed)
    this.container.addEventListener('submit', (e) => {
      this._makeBurger(e)
    })
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

window.addEventListener('DOMContentLoaded', () => {let menu = new Menu('#burgerMenu', url)})