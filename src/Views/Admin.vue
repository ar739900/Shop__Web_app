<template>
    <div>
        <NavbarComponent />
        <h4>Add product to sell</h4>
        <merchantComponents />
        <!-- <input v-model="form.name" type="text" />
        <input v-model="form.contact" type="text" />
        <input v-model="form.city" type="text" />
        <input v-model="form.age" type="number" /> -->
    </div>
</template>

<script setup>
import NavbarComponent from '../components/HomepageComponents/Navbar.vue'
// import { reactive } from 'vue';
// const form = reactive({
//     name: '',
//     contact: '',
//     city: '',
//     age: 0,
// })
import merchantComponents from '../components/MerchantComponents/addProducts.vue'
</script>

<style scoped></style>