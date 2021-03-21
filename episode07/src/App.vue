<template>
	<div id="app">
		<p>Sayaç = {{sayac}}</p>
		<p>
			<button @click="sayaciArttir">Arttır</button>
			<button @click="sayaciAzalt">Azalt</button>
		</p>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import HelloWorld from './components/HelloWorld.vue';

	@Component({
		components: {
			HelloWorld,
		},
	})
	export default class App extends Vue {
		private sayac = 0;

		private sayaciArttir() {
			this.sayac++;
		}
		private sayaciAzalt() {
			this.sayac--;
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
