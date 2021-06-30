<template>
  <input type="text" :value="value" @input="$emit('input', $event.target.value)" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TextBox extends Vue {
  @Prop() private value!: string;
}
</script>

<style lang="scss" scoped>
    input[type=text]{
        width: 100%;
        font-size: 12pt;
    }
</style>