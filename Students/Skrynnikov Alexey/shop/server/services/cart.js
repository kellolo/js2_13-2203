module.exports = {
    add(cart, item) {
        cart.contents.push(item);
        return cart
    },
    change(cart, id, amount) {
        let find = this._find(cart.contents, id)
        find.quantity += amount
        return cart
    },
    delete(cart, id) {
        let find = this._find(cart.contents, id)
        cart.contents.splice(cart.contents.indexOf(find), 1)
        return cart
    },
    _find(arr, id) {
        return arr.find(el => el.id_product == id)
    }
}