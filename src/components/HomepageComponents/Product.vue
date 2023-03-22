<template>
    <div id="products">
        <!-- <button @click="increment()">increment</button> -->
        <!-- <h2>{{ count }}</h2> -->
        <div @click="click(product.id)" v-for="product in products" :key="product" id="individual_product">
            <img :src="product.imageUrl" alt="img">
            <p>{{ product.title }}</p>
            <p>Price:${{ product.price }}</p>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted, onUpdated } from "vue";
// import axios from 'axios';
import { db, collection, getDocs, app } from '../../firebase'
const products = ref([]);
const router = useRouter();
onMounted(async () => {
    const getdocs = async () => {
        const querySnapshot = await getDocs(collection(db, "vuestore"));
        querySnapshot.forEach((doc) => {
            let product = doc.data()
            product.id = doc.id

            // doc.data() is never undefined for query doc snapshots
            products.value.push(product)
        })
    }
    // let data = await fetch('https://fakestoreapi.com/products');
    // let something = await data.json();
    // products.value = something
    // let res = await axios.get('https://fakestoreapi.com/products');
    // products.value = res.data
    await getdocs();
});
const click = (id) => {
    router.push(`productdetails/${id}`)
}

// onUpdated(() => {
//     console.log("data changed");
// })
// const increment = () => {
//     count.value++;
// }
</script>

<style scoped>
#products {
    display: flex;
    font-size: 20px;
}

#products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 3%;
    gap: 3%;
}

#products img {
    width: 100%;
}
</style>