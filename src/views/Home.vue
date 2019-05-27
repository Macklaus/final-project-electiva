<template>
    <div class="home-container">
        <h1 class="home-title">Lastest News</h1>
        <New v-for="newItem in news" :key="newItem.id" :item="newItem"/>
    </div>
</template>

<script>
import New from '@/components/New.vue';
import Axios from 'axios';
import config from '@/config';

export default {
    data(){
        return {
            news: [],
            types: []
        }
    },
    components: {
        New
    },
    mounted(){
        this.getTypes();
        this.getNews();
    },
    methods: {
        getTypes(){
            if(localStorage.getItem(config.STORAGE.TYPES)){
                let items = JSON.parse(localStorage.getItem(config.STORAGE.TYPES));
                this.$root.typeNews = items;
                this.types = items;
                return;
            } 
            Axios.get(config.URLs.TYPES).then(response => {
                localStorage.setItem(config.STORAGE.TYPES, JSON.stringify(response.data));
                this.$root.typeNews = response.data;
                this.types = response.data;
            }).catch(({response}) => {
                this.$noty.error(config.MESSAGES.TYPES_ERROR);
            })
        },
        getNews(){
            Axios.get(config.URLs.NEWS).then(response => {
                this.news = response.data.reverse();
                this.news.forEach(newItem => {
                    let curType = this.types.find(type => type.typeId === newItem.type);
                    newItem.type = curType.name;
                });
            }).catch(({response}) => {
                this.$noty.error(config.MESSAGES.ERROR);
            });
        }
    }
}
</script>

<style>
.home-container{
    margin: auto;
    padding: 1.3em 20px;
    text-align: center;
    width: 70%;
}

.home-title{
    font-family: 'Asap', sans-serif;
    color: #ffffff;
    margin-bottom: 40px;
}

@media (max-width: 768px) {
    .home-container{
        width: 90%;
    }
}

@media (max-width: 425px) {
    .home-container{
        width: 100%;
        padding: 1.3em 0;
    }
}
</style>


