<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" />
        <div class="form-content">
            <ComponentContainer text="Adınız : ">
                <TextBox v-model="firstname" />
            </ComponentContainer>
            <ComponentContainer text="Soyadınız : ">
                <TextBox v-model="lastname" />
            </ComponentContainer>
            <ComponentContainer text="Yaşınız : ">
                <template v-slot:labelArea>Yaşın: </template>
                <DropDownList v-model="age" :items="ages" />
            </ComponentContainer>
            <ComponentContainer text="Deneme : "/>
        </div>
        <div class="output">
            {{ firstname }} {{ lastname }} - {{ age }}
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import HelloWorld from "./components/HelloWorld.vue";

    @Component({
        components: {
            HelloWorld,
        },
    })
    export default class App extends Vue {
        private firstname = String();
        private lastname = String();
        private age = 18;
        private ages = Array.from({ length: 100 }, (value, key) => key + 1);
    }
</script>

<style lang="scss">
    * {
        font-family: Avenir, Helvetica, Arial, sans-serif;
    }
    #app {        
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;

        .form-content {
            border: 1px solid #eee;
            width: 500px;
            margin: 0 auto;
            -webkit-box-shadow: 5px 5px 15px 5px #000000;
            box-shadow: 5px 5px 15px 5px #000000;
        }

        .output{
            margin-top: 20px; 
        }
    }
</style>
