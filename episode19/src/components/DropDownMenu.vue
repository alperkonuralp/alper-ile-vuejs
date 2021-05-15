<template>
	<div class="menu">
		<button class="menu-button">{{buttonText}}</button>
		<div :class="dropDownMenuClass">
			<ul>
				<li v-for="item in menuItems" :key="item.text" @click="menuItemClicked(item)">
					{{item.text}}
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator";
	import { MenuItem, DropDownMenuPosition } from "./DropDownMenu";


	@Component
	export default class DropDownMenu extends Vue {

		@Prop({ required: true })
		private buttonText!: string;

		@Prop({ required: true })
		private menuItems!: MenuItem[];

		@Prop({ default: () => DropDownMenuPosition.Left })
		private menuPosition!: DropDownMenuPosition;

		private get dropDownMenuClass(): string[] {
			if (this.menuPosition == DropDownMenuPosition.Left)
				return ["dropdown-menu", "left"];
			return ["dropdown-menu", "right"];
		}

		private menuItemClicked(item: MenuItem) {
			if (item) {
				if (item.onClick) {
					item.onClick();
				}
				if (item.url) {
					location.assign(item.url);
				}
			}
		}
	}
</script>


<style scoped lang="scss">
	@import "./DropDownMenu.scss";
</style>