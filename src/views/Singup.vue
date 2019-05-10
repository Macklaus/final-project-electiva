<template>
    <div class="singup-container">
        <div class="card">
            <h2 class="card-title">Sing Up</h2>
            <input type="text" class="input-form" placeholder="Name" v-model="email">
            <input type="text" class="input-form" placeholder="Lastname" v-model="email">
            <input type="text" class="input-form" placeholder="Username or email" v-model="email">
            <input type="password" class="input-form" placeholder="Password" v-model="password">
            <button class="button submit-singup">Sing In</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {

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


