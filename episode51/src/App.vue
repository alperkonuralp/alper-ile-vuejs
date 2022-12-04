<template>
  <div id="app">
    <h1>Alper İle Vue.js - 51</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <span v-if="role == 'User'"
        >| <router-link to="/userprofile">User Profile</router-link></span
      >
      <span v-if="role == 'Manager'"
        >| <router-link to="/management">Management</router-link></span
      >
    </nav>
    <div>
      <label>
        Roles :
        <select v-model="role">
          <option>None</option>
          <option>User</option>
          <option>Manager</option>
        </select>
      </label>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import * as User from "./user";

@Component
export default class AppView extends Vue {
  private role = "None";

  private created() {
    this.role = User.userRole;
  }

  @Watch("role")
  private setRole(role: string) {
    User.setUserRole(role);
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
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
