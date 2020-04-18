<template>
    <div class="modal-bg">
        <div class="modal-inner">
            <button id="hideModal" @click="$parent.showModal = false"><img src="http://cdn.onlinewebfonts.com/svg/img_447722.png" alt=""></button>
            <form action="#" class="addItem-form" @submit="addItem">
                <h3>Add Item</h3>
                <input type="text" ref="product_name" placeholder="Product name" required>
                <input type="number" ref="price" placeholder="Price" required>
                <input type="number" ref="product_id" placeholder="Product ID (optional)">
                <input type="url" ref="image" placeholder="Image url (optional)">
                <button type="submit">Добавить</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        addItem () {
            let newItem = {
                //required fields
                product_name: this.$refs.product_name.value,
                price: this.$refs.price.value,
                //optional fields
                product_id: this.$refs.product_id.value == "" ? this.$refs.product_id.value = this.$parent.$refs.catalog.items.length : this.$refs.product_id.value,
                image: this.$refs.image.value == "" ? this.$refs.image.value = 'https://placehold.it/300x200' : this.$refs.image.value,
                //static field
                quantity: 1
            }
            this.$parent.$refs.catalog.items.push(newItem)
        }
    }
};
</script>

<style>
.addItem-form {
    display: flex;
    flex-direction: column;
    padding: 30px 0 0;
}
.addItem-form input {
    margin-bottom: 5px;
}
.modal-bg {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    transition: 0.3s ease-in-out;
}
.modal-inner {
    position: relative;
    padding: 1em;
    background: #fff;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    text-align: center;
    transition: all 0.3s cubic-bezier(0.2, 0.9, 0.3, 1.5);
    border-radius: 5px;
    border-left: 10px solid #2f2a2d;
    border-right: 10px solid #2f2a2d;
}
#hideModal {
    position: absolute;
    right: 10px;
    top: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50px;
    padding: 0;
    border: none;
    transform: rotate(45deg);
    outline: none!important;
}
</style>