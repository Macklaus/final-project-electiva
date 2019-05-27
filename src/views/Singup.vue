<template>
    <div class="singup-container">
        <div class="card">
            <h2 class="card-title">Sing Up</h2>

            <input type="text" :class="{'input-form': true, 'form-error': $v.realm.$error}" 
                placeholder="Complete name" v-model.trim.lazy="$v.realm.$model">
            <div v-if="$v.realm.$dirty" class="error-container">
                <div class="error" v-if="!$v.realm.required">* Field is required</div>
                <div class="error" v-if="!$v.realm.alpha">* Field accepts only alphabet characters</div>
            </div>

            <input type="text" :class="{'input-form': true, 'form-error': $v.username.$error}" 
                placeholder="Username" v-model="$v.username.$model">
            <div v-if="$v.username.$dirty" class="error-container">
                <div class="error" v-if="!$v.username.required">* Field is required</div>
            </div>

            <input type="text" :class="{'input-form': true, 'form-error': $v.email.$error}" 
                placeholder="Email" v-model="$v.email.$model">
            <div v-if="$v.email.$dirty" class="error-container">
                <div class="error" v-if="!$v.email.required">* Field is required</div>
                <div class="error" v-if="!$v.email.email">* Field accepts valid email addresses.</div>
            </div>

            <input type="password" :class="{'input-form': true, 'form-error': $v.password.$error}" 
                placeholder="Password" v-model="$v.password.$model">
            <div v-if="$v.password.$dirty" class="error-container">
                <div class="error" v-if="!$v.password.required">* Field is required</div>
                <div class="error" v-if="!$v.password.minLength">* Password must have at least {{$v.password.$params.minLength.min}} letters.</div>
            </div>

            <button class="button submit-singup" @click="registerNewUser()" :disabled="loading">
                {{ loading ? 'loading' : 'Sing Up' }}
            </button>
        </div>
    </div>
</template>

<script>
import Axios from 'axios';
import config from '@/config';
import { required, minLength, alpha, email } from 'vuelidate/lib/validators';
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
    validations:{
        realm:{
            required,
            alpha
        },
        username:{
            required
        },
        email:{
            required,
            email
        },
        password:{
            required,
            minLength: minLength(6)
        }
    },
    methods: {
        registerNewUser() {
            if(this.$v.$invalid){
                this.$v.$touch();
                return;
            }
            
            this.loading = true;
            Axios.post(config.URLs.SING_UP, {
                realm: this.$v.realm.$model,
                username: this.$v.username.$model,
                email: this.$v.email.$model,
                emailVerified: true,
                password: this.$v.password.$model
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
    padding-top: 20px;
}

.submit-singup{
    margin-top: 20px;
    color: #2F1A45;
    font-size: 18px;
    background-color: #0FB9B4;
}

.submit-singup:hover{
    background: linear-gradient(to right, rgba(179,220,237,1) 0%, rgba(41,184,229,1) 50%, rgba(188,224,238,1) 100%);
}
</style>


