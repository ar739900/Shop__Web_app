<template>
    <div>
        <navbar />
        <div class="q-pa-md" style="max-width:50%">
            <div id="container">
                <q-form @submit="onSubmit" id="user_form" class="q-gutter-md">
                    <q-input filled v-model="form.name" label="Your Name *" />

                    <q-input filled v-model="form.contact" label="Your Contact no. *" />

                    <q-input filled type="string" v-model="form.address" label="Address *" />
                    <div id="proceed_button">
                        <q-btn label="Place Order" type="submit" color="secondary" />
                    </div>
                </q-form>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useStore } from '../store.js';
import navbar from '../components/HomepageComponents/Navbar.vue';
import { reactive } from 'vue';
import { db, collection, addDoc } from '../firebase';
const store = useStore()
const form = reactive({
    name: '',
    contact: '',
    address: '',
    order: store.cart,
    total: store.cartTotal
})
const onSubmit = async () => {
    const docRef = await addDoc(collection(db, "orders"), form);
    console.log("Document written with ID: ", docRef.id);
}
</script>

<style scoped>
#container {
    margin-top: 10%;
}
</style>