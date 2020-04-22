module.exports = {
    addItem(catalog, item) {
        item.id_product = Date.now();
        catalog.push(item);
        return {newCatalog: catalog, idNew: item.id_product};
    }
}