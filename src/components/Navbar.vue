<template>
    <div class="navbar-container">
        <div class="navbar-title"><h1>News Around World</h1></div>
        <div class="link-container">
            <div class="left-links">
                <router-link to="/home" class="link">Home</router-link>
            </div>
            <div class="right-links">
                <router-link to="/login" class="link">Sing In</router-link>
                <router-link to="/singup" class="link">Sing Up</router-link>
            </div>
        </div>
    </div>
</template>

<style>
.navbar-container{
    width: 100vw;
    min-width: 300px;
    background-color: #FFFFFF;
    padding: 0.8em 1.1em;
    -webkit-box-shadow: 0px 6px 6px 1px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 6px 6px 1px rgba(0,0,0,0.75);
    box-shadow: 0px 6px 6px 1px rgba(0,0,0,0.75);
    /*flex*/
    display: flex;
    flex-flow: row wrap;
}
.navbar-title h1{
    font-family: 'Baloo Bhai', cursive;
}
.link-container{
    margin: 0 30px;
    /*flex*/
    flex-grow: 1;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
}
.link{
    margin: 0 20px;
    font-size: 20px;
}

@media (max-width: 676px) {
    .navbar-title{
        width: 100%;
        text-align: center;
    }
}
@media (max-width: 425px) {
    .navbar-container{
        padding-left: 0;
        padding-right: 0;
    }
    .link-container{
        justify-content: space-around;
    }
    .link{
        margin: 5px;
    }
}
</style>

