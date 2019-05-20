<template>
<div class="create-image-container">
    <div class="create-new-title-container">
        <h1 class="card-title create-new-title">Create a new News</h1>
    </div>
    <div class="create-new-form-container">
        <div class="create-new-image-container">
            <picture-input 
            ref="pictureInput"
            width="450" 
            height="400" 
            margin="0" 
            accept="image/jpeg,image/png" 
            size="5" 
            button-class="button set-image"
            :custom-strings="{
            upload: '<h1>Bummer!</h1>',
            drag: 'Drag a 😺 GIF or GTFO'
            }"
            @change="onChange">
            </picture-input>
        </div>
        <div class="create-new-data-container">
            <select name="" id="" v-model="type.typeId" class="create-new-form">
                <option value="" selected>Select a type</option>
                <option :value="item.typeId" v-for="item in types" :key="item.typeId">
                    {{item.name}}
                </option>
            </select>
            <input type="text" class="create-new-form" v-model="title" placeholder="Title">
            <textarea 
            name="" id="" cols="30" rows="10" 
            class="create-new-form" 
            v-model="content" 
            placeholder="Type some content...">
            </textarea>
            <button class="button create-new-button" @click="createNew()" :disabled="loading">
                {{loading ? 'loading' : 'Create News'}}
            </button>
        </div>
    </div>
</div>
</template>

<script>
import PictureInput from 'vue-picture-input';
import config from '@/config';
import Axios from 'axios';
import { isNullOrUndefined } from 'util';
export default {
    mounted(){
        this.getTypes();
    },
    components: {
        PictureInput
    },
    data(){
        return {
            image: null,
            types: [],
            type: {},
            title: '',
            content: '',
            loading: false
        }
    },
    methods: {
        onChange (image) {
            if (image) {
                this.image = image
            } else {
                console.log('FileReader API not supported: use the <form>, Luke!')
            }
        },
        getTypes(){
            let storageTypes = localStorage.getItem(config.STORAGE.TYPES); 
            if(storageTypes){
                this.types = JSON.parse(storageTypes);
                return;
            } 
            Axios.get(config.URLs.TYPES).then(response => {
                localStorage.setItem(config.STORAGE.TYPES, JSON.stringify(response.data));
                this.types = response.data;
            }).catch(({response}) => {
                this.$noty.error(config.MESSAGES.TYPES_ERROR);
            })
        },
        createNew(){
            if(isNullOrUndefined(this.image)){
                this.$noty.warning(config.MESSAGES.NO_IMAGE_SET);
                return;
            }
            if(!this.$root.auth.userId){
                this.$noty.error(config.MESSAGES.ERROR);
                this.$router.push(config.ROUTES.LOGIN);
                return;
            }
            this.loading = true;
            const form = new FormData();
            form.append('file', this.image);
            form.append('upload_preset', process.env.VUE_APP_CLOUDINARY_PRESET);
            form.append('api_key', process.env.VUE_APP_CLOUDINARY_API_KEY);
            Axios.post(config.URLs.CLOUDINARY, form).then(response => {
                Axios.post(config.URLs.NEWS, {
                    type: this.type.typeId,
                    title: this.title,
                    content: this.content,
                    imageUrl: response.data.secure_url,
                    userId: this.$root.auth.userId
                },{
                    headers: {
                        Authorization: `${this.$root.auth.id}`
                    }
                }).then(response => {
                    if(response){
                        if(response.status == 200){
                            this.$noty.success(config.MESSAGES.NEW_CREATED);
                            this.$router.push(config.ROUTES.HOME);
                        }
                    } else {
                        this.$noty.error(config.MESSAGES.ERROR);
                    }
                    this.loading = false;
                }).catch(({response}) => {
                    console.error(response);
                    this.$noty.error(config.MESSAGES.ERROR);
                    if(response.status == 401){
                        this.$router.push(config.ROUTES.LOGIN);
                    }
                    this.loading = false;
                });
            }).catch(() => {
                this.$noty.error(config.MESSAGES.ERROR);
                this.loading = false;
            });
        }
    }
}
</script>

<style>
    .create-new-container{
        width: 100%;
    }
    .create-new-title{
        text-align: center;
        margin-bottom: 10px;
    }
    .create-new-form-container{
        width: 100%;
        height: 100%;
        /*Flex*/
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
    }
    .create-new-image-container, .create-new-data-container{
        width: 50%;
        padding: 10px;
    }
    .create-new-data-container{
        padding-right: 50px;
        /*Flex*/
        display: flex;
        flex-flow: row wrap;
    }
    .create-new-form{
        width: 100%;
        margin-bottom: 30px;
        padding: 5px 10px;
    }
    .create-new-button, .set-image{
        background-color: #0FB9B4;
        color: #2F1A45;
        font-size: 18px;
        height: 43px;
    }
    .create-new-button{
        margin-top: 30px;
    }
    .set-image{
        width: 450px;
    }
    .create-new-button:hover{
        background: linear-gradient(to right, rgba(179,220,237,1) 0%, rgba(41,184,229,1) 50%, rgba(188,224,238,1) 100%);
    }
    .set-image:hover{
        background: linear-gradient(to right, rgba(179,220,237,1) 0%, rgba(41,184,229,1) 50%, rgba(188,224,238,1) 100%);
    }

    @media (max-width: 768px) {
        .create-new-data-container{
            padding-right: 10px;
        }
    }
    @media (max-width: 610px) {
        .create-new-image-container, .create-new-data-container{
            width: 100%;
        }
        .create-new-data-container{
            padding: 20px 50px;
        }
    }
    @media (max-width: 425px) {
        .create-new-data-container{
            padding: 20px 10px;
        }
    }
</style>
