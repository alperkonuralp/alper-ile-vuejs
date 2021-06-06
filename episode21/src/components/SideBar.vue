<template>
	<div class="sidebar" v-if="value">
		<div class="sidebar-backgroud"></div>
		<div class="sidebar-container">
			<div class="app-header">
				<div class="app-header-logo">
					<span class="mdi mdi-menu" @click="$emit('input', false)"></span>
					<img :src="logoUrl" />
					<h1>{{ pageTitle }}</h1>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue, Emit } from "vue-property-decorator";

	@Component
	export default class SideBar extends Vue {
		@Prop({ default: () => "Page Title", required: true })
		private pageTitle!: string;

		@Prop({ required: true })
		private logoUrl!: string;

		@Prop({ default: () => false })
		private value!: boolean;

	}
</script>


<style scoped lang="scss">
	@import "./SideBar.scss";
</style>