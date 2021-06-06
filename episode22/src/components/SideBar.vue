<template>
	<div class="sidebar" v-if="value">
		<div class="sidebar-backgroud"></div>
		<div class="sidebar-container">
			<div class="app-header">
				<div class="app-header-logo">
					<span class="mdi mdi-menu" @click="setInput(false)"></span>
					<img :src="logoUrl" />
					<h1>{{ pageTitle }}</h1>
				</div>
			</div>
			<div class="clear"></div>
			<div class="sidebar-items">
				<div class="sidebar-item" v-for="i in items" :key="i.text" @click="menuItemClicked(i)">
					<span :class="['mdi', i.icon, 'icon']"></span>
					<span class="text">{{i.text}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue, Emit } from "vue-property-decorator";
	import { MenuItem } from './SideBar';

	@Component
	export default class SideBar extends Vue {
		@Prop({ default: () => "Page Title", required: true })
		private pageTitle!: string;

		@Prop({ required: true })
		private logoUrl!: string;

		@Prop({ default: () => false })
		private value!: boolean;

		@Prop({ default: () => [] })
		private items!: MenuItem[];

		@Emit('input')
		private setInput(b: boolean) {
			// boþ
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
	@import "./SideBar.scss";
</style>