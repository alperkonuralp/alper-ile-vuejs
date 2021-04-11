<template>
  <div id="app">
    <!--<p>
    <label>Adınız : <input type="text" v-model="firstName" /></label>
  </p>
  <p>
    <label>Soyadınız : <input type="text" v-model="lastName" /></label>
  </p>
  <p v-if="firstName || lastName">
    Merhaba {{firstName}} {{lastName}}
  </p>
  <p v-if="fullName">
    Merhaba {{fullName}}
  </p>
  <p v-if="getFullName()">
    Merhaba {{getFullName()}}
  </p>
  <p>
    <button @click="tiklandi"> Tıkla </button>
  </p>-->

    <ListData />
    <ListData2 />
    <!--<HelloWorld :msg="fullName"/>-->
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import HelloWorld from "./components/HelloWorld.vue";
  import ListData from "./components/ListData.vue";
  import ListData2 from "./components/ListData2.vue";

  @Component({
    components: {
      HelloWorld,
      ListData,
      ListData2,
    },
  })
  export default class App extends Vue {
    private msg = 'Welcome to Your Vue.js + TypeScript App';
    private firstName = '';
    private lastName = '';

    private tiklandi() {
      this.msg += ". Tıklandı";
    }

    private get fullName(): string {
      if (this.firstName != '' || this.lastName != '') {
        return `${this.firstName} ${this.lastName}`;
      }
      return '';
    }

    private getFullName(): string {
      if (this.firstName != '' || this.lastName != '') {
        return `${this.firstName} ${this.lastName}`;
      }
      return '';
    }

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
