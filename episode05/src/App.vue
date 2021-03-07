<template>
  <div id="app">
    <div>
      <input type="text" v-model="msg" />
    </div>
    <mesaj-yaz :mesaj="msg" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MesajYaz from "./components/MesajYaz.vue";

@Component({
  components: {
    MesajYaz,
  },
})
export default class App extends Vue {
  private msg = String();
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
