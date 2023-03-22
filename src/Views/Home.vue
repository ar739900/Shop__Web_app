<template>
    <NavbarComponent />
    <bannerComponent welcomeMsg="Shop" />
    <productComponent />
</template>

<script setup>
import NavbarComponent from '../components/HomepageComponents/Navbar.vue';
import bannerComponent from "../components/HomepageComponents/Banner.vue"
import productComponent from '../components/HomepageComponents/Product.vue'
</script>

<style scoped></style>