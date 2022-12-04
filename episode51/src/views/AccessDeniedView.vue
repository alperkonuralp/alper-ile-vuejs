<template>
  <div class="about">
    <h1>"{{ pageMessage }}" Access Denied.</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HomeView extends Vue {
  private get pageMessage() {
    return this.$route.params.name;
  }
}
</script>
