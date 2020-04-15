<template>
    <div>
        <header>
            <div class="logo">E-shop</div>
            <div class="cart">
                <form action="#" class="search-form">
                    <input type="text" class="search-field" @input="name=$event.target.value" />
                    <button class="btn-search" @click="filter(name)">
                        <i class="fas fa-search"></i>
                    </button>
                </form>
                <button class="btn-cart" @click="show=!show">Cart</button>
                <cart />
            </div>
        </header>
        <main>
            <catalog />
            <templ />
        </main>
    </div>
</template>

<script>
import cart from "./containers/cart.vue"
import catalog from "./containers/catalog.vue"
import templ from "./containers/templ.vue"
export default {
	components: {cart, catalog, templ},
	methods:{
		get(url){
			return fetch(url).then(d=>d.json())
        },
        filter(name){         
         this.$children[1].items=this.$children[1].items.filter(product=> product.product_name==name)        
        }
	}
}
</script>

<style>
</style>