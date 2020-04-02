document.querySelector('#customer').addEventListener('keyup', function (event) {
    document.querySelector('#customerInput').textContent = event.target.value
})

document.querySelector('#address').addEventListener('keyup', function (event) {
    document.querySelector('#addressInput').textContent = event.target.value
})


document.querySelector('#okBtn').addEventListener('click', function (event) {
    let priceTotal = Number(document.querySelector(`input[name='size']:checked`).dataset["price"]) +
        Number(document.querySelector(`input[name='filling']:checked`).dataset["price"]) +
        Number(document.querySelector(`input[name='additive']:checked`).dataset["price"])
    let caloriesTotal = Number(document.querySelector(`input[name='size']:checked`).dataset["calories"]) +
        Number(document.querySelector(`input[name='filling']:checked`).dataset["calories"]) +
        Number(document.querySelector(`input[name='additive']:checked`).dataset["calories"])

    document.getElementById('price').innerHTML = (priceTotal)
    document.getElementById('calories').innerHTML = (caloriesTotal)

    console.log("your result of")
    console.log(`Cost value: ${priceTotal} rubles`)
    console.log(`Сaloric intake: ${caloriesTotal} calories`)
})