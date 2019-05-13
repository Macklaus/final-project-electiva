<template>
    <div class="new-container">
        <div class="new-title"><h1>Title</h1></div>
        <p class="new-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quibusdam officia hic, pariatur exercitationem, culpa accusantium, nulla dolorem maiores quos in qui itaque. Nobis a esse sint voluptas sunt saepe!</p>
        <button class="button new-read-more">Read More</button>
    </div>
</template>

<style scoped>
.new-container{
    background-color: #ffffff;
    margin: 10px 0;
    border-radius: 5px;
    /*flex*/
    display: flex;
    flex-direction: column;
}
.new-title{
    background-color: rgb(224, 224, 224);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 10px;
}
.new-content{
    padding: 20px;
    text-align: left;
}
.new-read-more{
    width: 300px;
    margin: 15px;
    background-color: #3fa0f7;
    color: #ffffff;
    /*flex*/
    align-self: flex-end;
}
.new-read-more:hover{
    background: linear-gradient(to right, rgba(179,220,237,1) 0%, rgba(41,184,229,1) 50%, rgba(188,224,238,1) 100%);
}
</style>

