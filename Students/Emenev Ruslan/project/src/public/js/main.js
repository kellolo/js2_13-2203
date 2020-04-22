
// let app = new Vue({
//     el: "#app",
//     data: {
//         items: [],
//         itemsCart:[],
//         url: "http://localhost:8080/src/data/catalogData.json",
//         show:false,
//         search:'',
//     },
//     methods: {
//         getData() {
//             return fetch(this.url).then(d => d.json())
//         },
//         addCart(event) {
//             let id = event.target.dataset['id']
//             let find = this.itemsCart.find(product => product.id_product === id)
//             if (find) {
//                 find.quantity++
//             }else {
//                 let prod = this._createNewProduct(event) // 
//                 this.itemsCart.push(prod)
//             }
//         },
//         _createNewProduct(prod) {
//             return {
//                 product_name: prod.target.dataset['name'],
//                 price: prod.target.dataset['price'],
//                 id_product: prod.target.dataset['id'],
//                 quantity: 1
//             }
//         },
//         deleteCart(product) {
//             let id = product.target.dataset['id'] 
//             let find = this.itemsCart.find(product => product.id_product === id)
//             if (find.quantity > 1) {
//                 find.quantity--
//             } else {
//                 this.itemsCart.splice(this.itemsCart.indexOf(find), 1)
//             }
//         },
//         searchItem(){
//             this.items = this.items.filter(elem=>elem.product_name==this.search)
//         }
//     },
//     async mounted() {
//         this.items = await this.getData();        
//     }
// })
