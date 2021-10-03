<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" />
        <!--<HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />-->
        <ul>
            <li v-for="eleman in kirtasiyeListesi" :key="eleman">
                {{eleman}}
            </li>
        </ul>
        
        <List :liste="kirtasiyeListesi" baslik="Kırtasiye Listesi">
            <template v-slot:default="{eleman, mesaj}">
                <span :title="mesaj">deneme - {{eleman}}</span>
            </template>         
            <template v-slot:header="{baslik, mesaj}">
                <span :title="mesaj">
                    Deneme Listesi [{{baslik}}]
                </span>
            </template>
        </List>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import HelloWorld from "./components/HelloWorld.vue";
    import List from "./components/List.vue";

    @Component({
        components: {
            HelloWorld,
            List,
        },
    })
    export default class App extends Vue {
        private kirtasiyeListesi = ['Kalem', 'Kağıt', 'Silgi'];
    }
</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
