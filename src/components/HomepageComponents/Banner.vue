<template>
    <div id="banner-div">
        <h1>{{ welcomeMsg }}</h1>
    </div>
</template>

<script setup>
defineProps(['welcomeMsg'])
</script>

<style scoped>
#h1 {
    font-size: 3rem;
    font-weight: 500;
}

#banner-div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    color: rgb(41, 151, 65);
    border-bottom: solid 1px black;
}
</style>