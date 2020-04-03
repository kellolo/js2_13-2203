<<<<<<< HEAD
let Hamburger = {

    price: 0,
    calories: 0,

    small: {
        price: 50,
        calories: 20
    },

    big: {
        price: 100,
        calories: 40
    },

    cheese: {
        price: 10,
        calories: 20
    },

    salad: {
        price: 20,
        calories: 5
    },

    potatoes: {
        price: 15,
        calories: 10
    },

    onion: {
        price: 30,
        calories: 8
    },

    spices: {
        price: 15,
        calories: 0
    },

    mayonnaise: {
        price: 20,
        calories: 5
    },

    ketchup: {
        price: 10,
        calories: 10
    },

    calc: function (size) {
        this.price += Hamburger[size].price;
        this.calories += Hamburger[size].calories;
        let checkedBoxes = document.querySelectorAll('input[name="filling"]:checked');
        for (let i = 0; i < checkedBoxes.length; i++) {
            let add = checkedBoxes[i].id;
            this.price += Hamburger[add].price;
            this.calories += Hamburger[add].calories;
        }

        Hamburger.result(this.price, this.calories);
    },

    result: function (price, calories) {
        document.getElementById('price').innerHTML = price;
        document.getElementById('calories').innerHTML = calories;
    },



    resetData: function () {
        this.price = 0;
        this.calories = 0;
        Hamburger.result(this.price, this.calories);
    }
}

document.getElementById('uForm').addEventListener('submit', function (event) {
    Hamburger.resetData();
    Hamburger.calc(document.querySelector('input[name="size"]:checked').value);
    event.preventDefault();
    console.log("hello")
})
=======
let Hamburger = {

    price: 0,
    calories: 0,

    small: {
        price: 50,
        calories: 20
    },

    big: {
        price: 100,
        calories: 40
    },

    cheese: {
        price: 10,
        calories: 20
    },

    salad: {
        price: 20,
        calories: 5
    },

    potatoes: {
        price: 15,
        calories: 10
    },

    onion: {
        price: 30,
        calories: 8
    },

    spices: {
        price: 15,
        calories: 0
    },

    mayonnaise: {
        price: 20,
        calories: 5
    },

    ketchup: {
        price: 10,
        calories: 10
    },

    calc: function (size) {
        this.price += Hamburger[size].price;
        this.calories += Hamburger[size].calories;
        let checkedBoxes = document.querySelectorAll('input[name="filling"]:checked');
        for (let i = 0; i < checkedBoxes.length; i++) {
            let add = checkedBoxes[i].id;
            this.price += Hamburger[add].price;
            this.calories += Hamburger[add].calories;
        }

        Hamburger.result(this.price, this.calories);
    },

    result: function (price, calories) {
        document.getElementById('price').innerHTML = price;
        document.getElementById('calories').innerHTML = calories;
    },



    resetData: function () {
        this.price = 0;
        this.calories = 0;
        Hamburger.result(this.price, this.calories);
    }
}

document.getElementById('uForm').addEventListener('submit', function (event) {
    Hamburger.resetData();
    Hamburger.calc(document.querySelector('input[name="size"]:checked').value);
    event.preventDefault();
    console.log("hello")
})
>>>>>>> 5161b9d915b6f39951e6827f7a8724f8a48f550e
