<template>
    <div id="product_add">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <q-input filled v-model="form.title" label="Product title *" />
            <q-input filled type="number" v-model="form.price" label="Product price *" />
            <q-file v-model="model" label="Insert the product image*" @update:modelValue="fileuplaod" />
            <div>
                <q-btn label="Submit" type="submit" color="secondary" />
                <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
        </q-form>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { getStorage, ref as firebaseref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, collection, addDoc } from '../../firebase';

const model = ref(null);
const form = reactive({
    title: '',
    price: 0,
    imageUrl: '',
})
const onSubmit = async () => {
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "vuestore"), form);
    console.log("Document written with ID: ", docRef.id);
}
const fileuplaod = () => {
    const storage = getStorage();
    const storageRef = firebaseref(storage, 'Products/' + model.value.name);
    const uploadTask = uploadBytesResumable(storageRef, model.value);
    uploadTask.on('state_changed',
        (snapshot) => {

            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
            }
        },
        (error) => {

        },
        () => {

            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('Uploaded');
                form.imageUrl = downloadURL;
            });
        }
    );
}

</script>

<style scoped>
#product_add {
    width: 50%;
}
</style>