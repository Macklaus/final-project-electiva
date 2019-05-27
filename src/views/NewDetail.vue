<template>
    <div class="new-detail-container">
        <div class="new-detail-item-container" v-if="item">
            <img :src="item.imageUrl" alt="" class="new-detail-image"> 
            <h1 class="new-detail-title">{{item.title}}</h1>
            <p class="new-detail-content">{{item.content}}</p>
            <div><h4 class="new-detail-type">Type of new: <em>{{item.type}}</em></h4></div>
        </div>  
    </div>
</template>

<script>
import Axios from 'axios';
import config from '@/config';
export default {
    data(){
        return {
            item: null
        }
    },
    mounted(){
        this.getNew();
    },
    methods: {
        getNew(){
            Axios.get(`${config.URLs.NEWS}/${this.$route.params.id}`).then(response => {
                console.log(response);
                this.item = response.data;
            }).catch(({error}) => {
                console.log(error);
                this.$noty.error(config.MESSAGES.ERROR);
            });
        }
    }
}
</script>

<style scoped>
    .new-detail-container{
        width: 60vw;
        min-height: 88vh;
        margin: auto;
        padding-bottom: 50px;
        text-align: center;
        background-color: #ffffff;
    }
    .new-detail-title{
        margin: 20px 0;
    }

    .new-detail-image{
        width: 100%;
        max-height: 460px;
    }

    .new-detail-content{
        padding: 0 4.9em;
        text-align: justify;
        font-size: 17px;
    }
    .new-detail-type{
        width: 100%;
        text-align: end;
        margin-top: 50px;
        padding-right: 4.9em; 
    }
</style>


