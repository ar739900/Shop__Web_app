<template>
  <div>
    <div id="container">
      <div id="lhs">
        <img :src=product.imageUrl alt="img">
      </div>
      <div id="rhs">
        <p>{{ product.title }}</p>
        <p>Price:${{ product.price }}</p>
        <q-btn @click="addToCart(product)" id="addtocart" color="black" label="Add  To Cart" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { doc, getDoc, db } from '../../firebase.js';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from '../../store.js'
const product = ref({})
const route = useRoute();
const store = useStore();
onMounted(async () => {
  const docRef = doc(db, "vuestore", route.params.id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    let prod = docSnap.data();
    prod.id = docSnap.id
    product.value = prod
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
})
const addToCart = (product) => {
  store.addtoCart(product)
}
</script>

<style scoped>
#container {
  display: flex;
  margin: 5%;
}

#lhs {
  display: flex;
  flex: 4;
}

#lhs img {
  width: 90%;
}

#addtocart {
  width: 40%;
}

#rhs {
  display: flex;
  flex: 6;
  flex-direction: column;
  margin-left: 3%;
  font-size: 200%;
}
</style>