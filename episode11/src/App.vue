<template>
	<div id="app">
		<p>Adınız : <input type="text" v-model="yazi" /></p>
		<p>{{ yazi }}</p>
		<p>{{ yaziUzunlugu }}</p>
		<hr/>
		<ListData/>
	</div>
</template>

<script lang="ts">
	import { Component, Vue, Watch } from "vue-property-decorator";
	import ListData from './components/ListData.vue';

	@Component({
		components: {
			ListData
		}
	})
	export default class App extends Vue {
		private yazi = "";
		private yaziUzunlugu = 0;

		@Watch("yazi")
		private yazininDegisimi(y: string) {
			this.yaziUzunlugu = y.length;
		}
	}
</script>

<style lang="scss">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
