<template>
	<div class="app-header">
		<div class="app-header-logo">
			<img :src="logoUrl" />
			<h1>{{ pageTitle }}</h1>
		</div>
		<div class="app-header-search">
			<input type="text" v-model="searchText" :placeholder="searchTextboxTooltip" />
			<button @click="buttonClick">{{ searchButtonText }}</button>
		</div>
		<div class="app-header-menu">Menu</div>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator";

	@Component
	export default class Header extends Vue {
		@Prop({ default: () => "Page Title", required: true })
		private pageTitle!: string;

		@Prop({ required: true })
		private logoUrl!: string;

		@Prop({ default: () => "Search" })
		private searchTextboxTooltip!: string;

		@Prop({ default: () => "Search" })
		private searchButtonText!: string;

		private searchText = String();

		private buttonClick() {
			if (this.searchText && this.searchText != "")
				this.$emit('searchSubmit', this.searchText);
		}
	}
</script>


<style scoped lang="scss">
	@import "./Header.scss";
</style>