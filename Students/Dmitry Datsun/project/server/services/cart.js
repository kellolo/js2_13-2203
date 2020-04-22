module.exports = {
    addItem(cart, item) {
        cart.contents.push(item);
        return cart;
    },
    putItem(cart, id, amount = 1) {
        let find = this._find(cart.contents, id);
        find.quantity += amount;
        return cart;
    },
    deleteItem(cart, id, amount = 1) {
        let find = this._find(cart.contents, id);
        cart.contents.splice(cart.contents.indexOf(find), amount)
        return cart;
    },
    _find(arr, id) {
        return arr.find(x => x.id_product == id)
    }
}