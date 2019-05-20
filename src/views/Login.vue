<template>
    <div class="login-container">
        <div class="card">
            <h2 class="card-title">Login to News</h2>
            <input type="text" class="input-form" placeholder="Username or email" v-model="email">
            <input type="password" class="input-form" placeholder="Password" v-model="password">
            <button class="button submit-login" @click="login()" :disabled="loading">
                {{loading ? 'loading' : 'Sing In'}}
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
            email: '',
            password: '',
            loading: false
        }
    },
    methods: {
        login(){
            this.loading = true;
            Axios.post(config.URLs.LOGIN, {
                email: this.email,
                password: this.password
            }).then(response => {
                if(response){
                    localStorage.setItem(config.STORAGE.AUTH, JSON.stringify(response.data));
                    this.$root.auth = response.data;
                    this.$router.push(config.ROUTES.HOME);
                    this.$noty.success(config.MESSAGES.SUCCESS_LOGIN);
                } else {
                    this.$noty.error(config.MESSAGES.ERROR);
                }
                this.loading = false;
            }).catch(({response}) => {
                if(response){
                    if(response.status == 401){
                        if(response.data.error){
                            this.$noty.error(response.data.error.message);
                        }
                    }
                } else {
                    this.$noty.error(config.MESSAGES.ERROR);
                }
                this.loading = false;
            });
        }
    }
}
</script>


<style>
.login-container{
    padding-top: 5em;
}
.card{
    background-color: #54317A;
    padding: 20px;
    margin: auto;
    width: 450px;
    min-width: 300px;
    border-radius: 5px;
    text-align: center;
    /* -webkit-box-shadow: 0px 0px 16px -1px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 16px -1px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 16px -1px rgba(0,0,0,0.75); */
    /*flex*/
    display: flex;
    flex-flow: row wrap;
}
.card-title, .input-form, .button{
    width: 100%;
    margin: 10px 0;
}

.card-title{
    font-size: 35px;
    margin-bottom: 40px;
    padding-bottom: 10px;
    color: #fff;
    font-family: 'Asap', sans-serif;
    border-bottom: 1px solid #9b4bf9;
}

.input-form{
    padding: 15px;
    font-size: 14px;
}

.submit-login{
    margin-top: 30px;
    color: #2F1A45;
    font-size: 18px;
    background-color: #0FB9B4;
}

.button{
    border-radius: 5px;
    cursor: pointer;
    padding: 11px;
    border: none;
}

.submit-login:hover{
    background: linear-gradient(60deg,#0FB9B4,#d88ee0);
}

</style>
