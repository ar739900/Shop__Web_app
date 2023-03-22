<template>
    <div id="parent">
        <div id="upperBody">
            <NavbarComponent />
            <bannerComponent welcomeMsg="Shop" />
            <productComponent />
        </div>
        <div id="lowerBody">
            <foot />
        </div>
    </div>
</template>

<script setup>
import NavbarComponent from '../components/HomepageComponents/Navbar.vue';
import bannerComponent from "../components/HomepageComponents/Banner.vue"
import productComponent from '../components/HomepageComponents/Product.vue'
import foot from '../components/HomepageComponents/footer.vue'
</script>

<style scoped>
#parent {
    position: relative;
}

#upperBody {
    min-height: 725px;
}

#lowerBody {
    position: absolute;
    bottom: 0;
}
</style>