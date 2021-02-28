<template>
  <div id="app">
    <p>Count = {{ count }}</p>
    <p>Count = <span v-html="count"></span></p>
    <button @click="eksilt">Eksilt</button>
    <button @click="count++">Arttır</button>
    <hr />
    <p>message = {{ message }}</p>
    <p>message = <span v-html="message"></span></p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
  private count = 1;
  private message = "<strong>Merhaba</strong>";

  private eksilt() {
    this.count--;
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
