<template>
    <div id="cart">
        <q-dialog :seamless="true" :modelValue="dialogVisibility" position="right">
            <q-card id="cart_card">
                <q-card-section>
                    <div id="cart_items">
                        <h4>Added items</h4>
                    </div>
                    <q-space />
                    <div id="cart_products">
                        <div v-for="product in store.cart" :key="product" id="cart_product">
                            <div id="lhs">
                                <img :src="product.imageUrl" alt="img">
                            </div>
                            <div id="rhs">
                                <p>{{ product.title }}</p>
                                <p>price:${{ product.price }}</p>
                                <q-icon @click="removeFromCart(product.id)" name="delete" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <router-link to='/order'>
                            <q-btn color="secondary" label="proceed" />
                        </router-link>
                    </div>
                </q-card-section>
            </q-card>
        </q-dialog>
    </div>
</template>

<script setup>

import { useStore } from '../../store.js';
const store = useStore();
defineProps(['dialogVisibility'])

const removeFromCart = (id) => {
    store.removeFromCart(id)
}
</script>

<style scoped>
#cart_card {
    height: 900px;
    width: 400px;
    margin-top: 10%;
}

#cart_product div {
    margin-top: 4%;
}

#cart_product {
    display: flex;
}

#lhs {
    display: flex;
    flex: 6;
}

#rhs {
    display: flex;
    flex: 4;
    flex-direction: column;
}

#lhs img {
    width: 50%;
    padding: 2%;
}

a {
    text-decoration: none;
}
</style>