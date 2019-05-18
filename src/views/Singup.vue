<template>
    <div class="singup-container">
        <div class="card">
            <h2 class="card-title">Sing Up</h2>
            <input type="text" class="input-form" placeholder="Complete name" v-model="realm">
            <input type="text" class="input-form" placeholder="Username" v-model="username">
            <input type="text" class="input-form" placeholder="Email" v-model="email">
            <input type="password" class="input-form" placeholder="Password" v-model="password">
            <button class="button submit-singup" @click="registerNewUser()" :disabled="loading">
                {{ loading ? 'loading' : 'Sing Up' }}
            </button>
        </div>
    </div>
</template>

<script>
import Axios from 'axios';
import config from '@/config';
export default {
    data(){
        return {
            realm: '',
            username: '',
            email: '',
            password: '',
            loading: false
        }
    },
    methods: {
        registerNewUser() {
            this.loading = true;
            Axios.post(config.URLs.SING_UP, {
                realm: this.realm,
                username: this.username,
                email: this.email,
                emailVerified: true,
                password: this.password
            }).then(response => {
                this.$noty.success(config.MESSAGES.SING_UP);
                this.$router.push(config.ROUTES.LOGIN);
                this.loading = false;
            }).catch(({response}) => {
                this.$noty.error(config.MESSAGES.ERROR);
                this.loading = false;
            });
        }
    }
}
</script>

<style>
.singup-container{
    padding-top: 40px;
}

.submit-singup{
    margin-top: 30px;
    color: #2F1A45;
    font-size: 18px;
    background-color: #0FB9B4;
}

.submit-singup:hover{
    background: linear-gradient(to right, rgba(179,220,237,1) 0%, rgba(41,184,229,1) 50%, rgba(188,224,238,1) 100%);
}
</style>


