<template>
    <div>
        <NavbarComponent />
        <h4>This is admin page</h4>
        <adminComponents/>
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
import adminComponents from '../components/AdminComponents/addProducts.vue'
</script>

<style scoped></style>