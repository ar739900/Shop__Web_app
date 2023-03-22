<template>
    <div id="login_card">
        <q-dialog :seamless='true' :modelValue="loginVisibility" position="left">
            <q-card id="card">
                <q-card-section class="row items-center no-wrap">
                    <div id="upperBody">
                        <h4>Login</h4>
                    </div>
                    <q-space />
                    <div id="lowerBody">
                        <div class="q-pa-md" style="max-width:200px">
                            <div id="container">
                                <q-form @submit="onSubmit" id="user_form" class="q-gutter-md">
                                    <q-input filled v-model="username" label="Email or username *" />
                                    <q-input filled v-model="password" label="password *" />
                                    <div id="proceed_button">
                                        <q-btn label="Login" type="submit" color="secondary" />
                                    </div>
                                </q-form>
                            </div>
                        </div>
                    </div>
                </q-card-section>
            </q-card>
        </q-dialog>
    </div>
</template>
<script setup>
import router from '../../router.js';

defineProps(['loginVisibility']);
const onSubmit = () => {
    router.push('/account')
}
</script>
<style scoped>
#card {
    display: flex;
    height: 900px;
    width: 300px;
}

#popUpTitle {
    display: flex
}

#lowerBody {
    display: flex;
    flex: 10;
}
</style>