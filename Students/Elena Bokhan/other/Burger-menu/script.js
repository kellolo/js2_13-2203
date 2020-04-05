let orderArr = {};

function getTotalPrice() {
    let newBurger = new Burger("size", "filling", "adds");
    orderArr.size = newBurger.size;
    orderArr.filling = newBurger.filling;
    orderArr.adds = newBurger.adds;
    let newCart = new Cart(orderArr);
    newCart.renderSumAndCalories();
}
class Burger {
    constructor(size, filling, adds) {
        this.size = this._check(size);
        this.filling = this._check(filling);
        this.adds = this._getArray(adds);
    }
    _check(attrName) {
        let obj = document.querySelector(`input[name=${attrName}]:checked`);
        if (obj != null) return obj;
    }
    _getArray(attrName) {
        let objArr = [...document.querySelectorAll(`input[name=${attrName}]:checked`)];
        if (objArr != null) return objArr;
    }
}

class Cart {
    constructor(arr) {
        this.size = orderArr.size;
        this.filling = orderArr.filling;
        this.adds = orderArr.adds;
        this.name = this.getName();
        this.sum = 0;
        this.sumCalories = 0;
        this.getSumAndCalories();
    }
    getName() {
        let fieldName = document.querySelector(".total-name");
        if (this.size) fieldName.innerText = this.size.id + " burger";
    }
    getSumAndCalories() {
        if (this.size != undefined) {
            this.sum += +this.size.dataset["price"];
            this.sumCalories += +this.size.dataset["calories"];
        }
        if (this.filling != undefined) {
            this.sum += +this.filling.dataset["price"];
            this.sumCalories += +this.filling.dataset["calories"];
        }
        if (this.adds.length > 0) {
            for (let item of this.adds) {
                this.sum += +item.dataset["price"];
                this.sumCalories += +item.dataset["calories"];
            }
        }
    }
    renderSumAndCalories() {
        let fieldSum = document.querySelector(".total-price");
        fieldSum.innerText = this.sum + " $";
        let fieldCal = document.querySelector(".total-calories");
        fieldCal.innerText = this.sumCalories + " cl";
    }
}
document.addEventListener("click", () => getTotalPrice());