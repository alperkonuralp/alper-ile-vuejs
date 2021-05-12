<template>
	<div class="app-header">
		<div class="app-header-logo">
			<img />
			<h1>Logo</h1>
		</div>
		<div class="app-header-search">Search</div>
		<div class="app-header-menu">Menu</div>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator";

	@Component
	export default class Header extends Vue {
		@Prop() private msg!: string;
	}
</script>


<style scoped lang="scss">
	.app-header {
		background: lightgray;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: 50px;
		padding: 5px 8px;

		.app-header-logo	{
			float: left;
			width: 25%;
			text-align: left;
			img	{
				height: 50px;
				width: 50px;
				background: blue;
				float: left;
			}
			h1 {
				float: left;
				margin: 7px;
			}
		}

		.app-header-search {
			float: left;
			width: 50%;
		}

		.app-header-menu {
			float: left;
			width: 25%;
			text-align: right;
		}
	}
</style>