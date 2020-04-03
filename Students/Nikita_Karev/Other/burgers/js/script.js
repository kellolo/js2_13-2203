document.querySelector('#okBtn').addEventListener('click', function() {
    let burger = new Burger('hamb', 'topping', 'drink')
    burger.showSum('#price', '#cals')
});

class Burger {
    constructor(hamb, topping, drink) {
        this.hamb = new Parameter(this._select(hamb));
        this.topping = new Parameter(this._select(topping));
        this.drink = this._getDomArray(drink);
    }

    _select(attrName) {
        return document.querySelector(`input[name="${attrName}"]:checked`);
    }

    _getDomArray(attrName) {
        const arr = [];
        this._selectAll(attrName).forEach(item => {
            arr.push(new Parameter(item));
        })
        console.log(arr);
        return arr;
    }

    _selectAll(attrName) {
        return [...document.querySelectorAll(`input[name="${attrName}"]:checked`)]
    }

    _calc(parameterPropName) {
        let result = this.hamb[parameterPropName] + this.topping[parameterPropName];
        this.drink.forEach(item => {
            result += item[parameterPropName];
        });
        return result;
    }

    showSum(price, cals) {
        console.log('showsum');
        document.querySelector(price).innerText = this._calc('price')
        document.querySelector(cals).innerText = this._calc('calories')
    }
}

class Parameter {
    constructor (domEl){
        this.name = domEl.value
        this.price  = +domEl.dataset['price']
        this.calories = +domEl.dataset['cals']
    }
}