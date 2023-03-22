import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useStore = defineStore('cart', () => {
    const cart = ref([]);
    const addtoCart = (product) => {
        console.log(product);
        cart.value.push(product)
        console.log(cart.value);
    }
    const cartTotal = computed(() => cart.value.reduce((total, product) => {
        return Number(total) + Number(product.price);
    }, 0)
    );
    const removeFromCart = (id) => {
        cart.value = cart.value.filter((el) => {
            return el.id !== id
        })
    }
    const cartCount = computed(() => cart.value.length);
    return { cartCount, addtoCart, cart, removeFromCart, cartTotal }
    // other options...
})
