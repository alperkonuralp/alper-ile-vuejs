<template>
	<div class="ComponentContainer">
		<Label :text="text" />
		<slot />
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ComponentContainer extends Vue {
	@Prop() private text!: string;
}
</script>

<style lang="scss">
	div {
		text-align: left;
		margin: 5px;
	}
	div label {
		display: inline-block;
		width: 100px;
	}
</style>