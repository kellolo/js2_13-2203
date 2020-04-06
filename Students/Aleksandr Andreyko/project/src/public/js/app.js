import makeGETRequest from './client'

const API_URL = 'https://raw.githubusercontent.com/allkeck/store-api/master/responses'
const IMG_PREFIX = 'https://muehle-shaving.ru/images/muhle/products/'

class Catalog {
  constructor(cart) {
    this.items = []
    this.filteredItems = []
    this.container = '.content'
    this.cart = cart
    this.url = `${API_URL}/catalogData.json`
    this.wrongUrl = true
  }

  _handleEvents() {
    document.querySelector(this.container).addEventListener('click', (evt) => {
      if (evt.target.name === 'buy-btn') {
        this.cart.addProduct(evt.target)
      }
    })
  }

  _handleData() {
    for (let i = 0; i < IDS.length; i++) {
      this.items.push(this._createNewProduct(i))
    }
  }

  _createNewProduct(index) {
    return {
      product_name: PRODUCTS_NAMES[index],
      price: PRICES[index],
      id_product: IDS[index],
      img: IMGS[index]
    }
  }

  filterProducts(value) {
    let filter = new RegExp('^.*' + value + '.*$', 'i')
    this.filteredItems = this.items.filter(item => filter.test(item.product_name))
    this.render()
  }

  fetchProducts() {
    return new Promise((onResponse, onError) => {
      makeGETRequest(this.url)
        .then((goods) => {
          onResponse()
          this.items = JSON.parse(goods)
          this.filteredItems = JSON.parse(goods)
        }, (status) => {
          onError(status)
          console.log(`Ошибка обработки запроса со статусом ${status}`)
        })
    }).then(() => {
      this.render()
    }, (status) => {
      this.renderNoGood(status)
    })
  }

  render() {
    let str = ''
    this.filteredItems.forEach(item => {
      str += `
               <div class="product-item">
                   <img src="${IMG_PREFIX + item.img}" alt="${item.product_name}">
                   <!--img src="${item.img}" width="300" height="200" alt="${item.product_name}"-->
                   <div class="desc">
                       <h1>${item.product_name}</h1>
                       <p>${item.price} &#8381;</p>
                       <button 
                       class="buy-btn" 
                       name="buy-btn"
                       data-name="${item.product_name}"
                       data-price="${item.price}"
                       data-id="${item.id_product}"
                       >Купить</button>
                   </div>
               </div>
           `
    })
    document.querySelector(this.container).innerHTML = `<div class="catalog">${str}</div>`
    this._handleEvents()
  }

  renderNoGood(status) {
    document.querySelector(this.container).innerHTML =
      `
        <h1 class="error">Произошла ошибка ${status}!</h1>
        <button class="refresh-data">Повторить попытку!</button>
      `
    this._handleEvents()
  }
}

class Form {
  constructor() {
    this.container = '.content'
    this.url = `${API_URL}/feedbackForm.json`
    this.formData = ''
    this._fetchFormData()
  }

  _fetchFormData() {
    let request = makeGETRequest(this.url)
    request.then(
      (data) => {
        this.formData = JSON.parse(data)
      },
      (status) => {
        console.log(status)
      }
    )
  }

  render() {
    let fields = ''
    this.formData.fields.forEach(item => {
      fields += `<div><input type="text" placeholder="${item.label}" data-validate="${item.validation}"></div>`
    })
    let str =
      `
        <h1>${this.formData.heading}</h1>
        <form action="#">
          ${fields}
          <button type="submit" class="feedback-form-submit">Отправить</button>
        </form>
      `
    document.querySelector(this.container).innerHTML = `<div class="feedback">${str}</div>`
    document.querySelector('.feedback-form-submit').addEventListener('click', (e) => {
      e.preventDefault()
      let inputs = [...document.querySelectorAll('.feedback input')]
      inputs.forEach(item => {
        let regValidate = new RegExp(item.getAttribute('data-validate'))
        if(!regValidate.test(item.value)) {
          item.classList.add('error-field')
        } else if(item.classList.contains('error-field')) {
          item.classList.remove('error-field')
        }
      })

      if(!inputs.some((item) => {item.classList.contains('error-field')})) {
        alert('Ошибка отправки')
      } else {
        alert('Сообщение отправлено')
      }
    })
  }
}

class Cart {
  constructor() {
    this.items = []
    this.total = 0
    this.sum = 0
    this.container = '.cart-block'
    this.quantityBlock = document.querySelector('#quantity')
    this.priceBlock = document.querySelector('#price')
    this._init()
  }

  _init() {
    this._handleEvents()
  }

  _handleEvents() {
    document.querySelector(this.container).addEventListener('click', (evt) => {
      if (evt.target.name === 'del-btn') {
        this.deleteProduct(evt.target)
      }
    })
  }

  addProduct(product) {
    let id = product.dataset['id']
    let find = this.items.find(product => product.id_product === id)
    if (find) {
      find.quantity++
    } else {
      let prod = this._createNewProduct(product)
      this.items.push(prod)
    }

    this._checkTotalAndSum()
    this.render()
  }

  _createNewProduct(prod) {
    return {
      product_name: prod.dataset['name'],
      price: prod.dataset['price'],
      id_product: prod.dataset['id'],
      quantity: 1
    }
  }

  deleteProduct(product) {
    let id = product.dataset['id']
    let find = this.items.find(product => product.id_product === id)
    if (find.quantity > 1) {
      find.quantity--
    } else {
      this.items.splice(this.items.indexOf(find), 1)
    }

    this._checkTotalAndSum()
    this.render()
  }

  _checkTotalAndSum() {
    let qua = 0
    let pr = 0
    this.items.forEach(item => {
      qua += item.quantity
      pr += item.price * item.quantity
    })
    this.total = qua
    this.sum = pr
  }

  render() {
    let itemsBlock = document.querySelector(this.container).querySelector('.cart-items')
    let str = ''
    this.items.forEach(item => {
      str += `<div class="cart-item" data-id="${item.id_product}">
                    <img src="https://placehold.it/100x80" alt="">
                    <div class="product-desc">
                        <p class="product-title">${item.product_name}</p>
                        <p class="product-quantity">${item.quantity}</p>
                        <p class="product-single-price">${item.price}</p>
                    </div>
                    <div class="right-block">
                        <button name="del-btn" class="del-btn" data-id="${item.id_product}">&times;</button>
                    </div>
                </div>`
    })
    itemsBlock.innerHTML = str
    this.quantityBlock.innerText = this.total
    this.priceBlock.innerText = this.sum
  }
}

export default () => {
  let k = new Catalog(new Cart)
  k.fetchProducts()
  window.k = k

  window.f = new Form()

  let navigation = document.querySelector('.navigation')
  navigation.addEventListener('click', (e) => {
    const navItem = e.target.getAttribute('data-navitem')
    switch (navItem) {
      case 'catalog':
        window.k.render()
        break;

      case 'feedback':
        window.f.render()
        break;
    
      default:
        break;
    }
  })

  let [btnSearch, searchField] = [document.querySelector('.btn-search'),
                                  document.querySelector('.search-field')]
  btnSearch.addEventListener('click', () => {
    k.filterProducts(searchField.value)
  })
}