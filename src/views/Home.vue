<template>
    <div class="home-container">
        <h1 class="home-title">Home page</h1>
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
</style>


