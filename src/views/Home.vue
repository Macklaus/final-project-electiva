<template>
    <div class="home-container">
        <h1 class="home-title">Lastes News</h1>
        <New/>
    </div>
</template>

<script>
import New from '@/components/New.vue';

export default {
    components: {
        New
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


