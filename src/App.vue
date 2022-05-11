<template>
    <div id="app">
        <header>
            <TopBar />
            <HeaderBar />
            <NavigationBar />
            <MenuBar />
        </header>
        <div>
            <router-view></router-view>
        </div>
    <!-- <vue-formulate /> -->
    </div>
</template>

<script>

// import AppHeader from './components/AppHeader'

//import VueFormulate from './components/VueFormulate';
import TopBar from './components/TopBar.vue';
import HeaderBar from './components/HeaderBar.vue';
import MenuBar from './components/MenuBar.vue'
import NavigationBar from './components/NavigationBar.vue'
// import AppForm from './components/AppForm.vue'

export default {
    name: 'App',
    components: {
    TopBar,
    HeaderBar,
    NavigationBar,
    MenuBar,
    // AppForm,
    // AppHeader,
    //VueFormulate
}
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 0px;
}
</style>