<template>
	<div class="app-header">
		<div class="app-header-logo">
			<span class="mdi mdi-menu" @click="$emit('update:sidebar', !sidebar)"></span>
			<img :src="logoUrl" />
			<h1>{{ pageTitle }}</h1>
		</div>
		<div class="app-header-search">
			<input type="text" v-model="searchText" :placeholder="searchTextboxTooltip" />
			<button @click="buttonClick">{{ searchButtonText }}</button>
		</div>
		<div class="app-header-menu">
			<DropDownMenu v-if="isUserLogedIn"
										:button-text="menuButtonText"
										:menuItems="internalMenuItems"
										menuPosition="right" />
			<button v-else @click="loginClicked">{{signInButtonText}}</button>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue, Emit } from "vue-property-decorator";
	import { MenuItem } from "./DropDownMenu";

	@Component
	export default class Header extends Vue {
		@Prop({ default: () => "Page Title", required: true })
		private pageTitle!: string;

		@Prop({ required: true })
		private logoUrl!: string;

		@Prop({ default: () => false })
		private sidebar!: boolean;

		@Prop({ default: () => "Search" })
		private searchTextboxTooltip!: string;

		@Prop({ default: () => "Search" })
		private searchButtonText!: string;

		@Prop({ default: () => "Sign In" })
		private signInButtonText!: string;

		@Prop({ default: () => "Menu" })
		private menuButtonText!: string;

		@Prop({ default: () => "Logout" })
		private logoutText!: string;

		@Prop({ default: () => false })
		private isUserLogedIn!: boolean;

		@Prop({ default: () => [] })
		private menuItems!: MenuItem[];

		private searchText = String();

		private get internalMenuItems(): MenuItem[] {
			return [
				...this.menuItems,
				{ text: this.logoutText, onClick: this.logoutClicked },
			];
		}

		private buttonClick() {
			if (this.searchText && this.searchText != "")
				this.$emit('searchSubmit', this.searchText);
		}

		@Emit('loginClicked')
		private loginClicked() {
			// boþ
		}
		@Emit('logoutClicked')
		private logoutClicked() {
			// boþ
		}
	}
</script>


<style scoped lang="scss">
	@import "./Header.scss";
</style>