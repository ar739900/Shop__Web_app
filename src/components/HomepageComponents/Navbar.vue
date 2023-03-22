<template>
    <div>
        <div id="navbar">
            <router-link to="/">
                <div id="lhs">Home</div>
            </router-link>
            <div id="rhs">
                <div id="Account">Account</div>
                <div @click="dialog = !dialog" id="Cart">
                    <q-icon name="shopping_cart" />
                    <div id="cart_count">{{ storeCart.cartCount }}</div>
                    <cartCard :dialogVisibility="dialog" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from '../../store.js'
import cartCard from '../cartComponents/cartPopUp.vue'
const dialog = ref(false);
const storeCart = useStore();

</script>

<style scoped>
#navbar {
    display: flex;
    height: 70px;
    align-items: center;
    font-size: 130%;
    border-bottom: solid 1px black;
}

#lhs {
    display: flex;
    flex: 3;
    align-items: center;
}

#rhs {
    display: flex;
    flex: 7;
    gap: 10%;
    align-items: center;
    justify-content: flex-end;
}

#Cart {
    display: flex;
    align-items: center;
}

#cart_count {
    padding-bottom: 12px;
}

a {
    text-decoration: none;
}
</style>