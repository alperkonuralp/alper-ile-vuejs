<template>
	<div class="menu">
		<button class="menu-button">{{buttonText}}</button>
		<div class="dropdown-menu">
			<ul>
				<li v-for="item in menuItems" :key="item.text">{{item.text}}</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator";

	export interface MenuItem {
		text: string;
		url?: string;
	}

	@Component
	export default class DropDownMenu extends Vue {

		@Prop({ required: true })
		private buttonText!: string;

		@Prop({ required: true })
		private menuItems!: MenuItem[];

	}
</script>


<style scoped lang="scss">
	@import "./DropDownMenu.scss";
</style>