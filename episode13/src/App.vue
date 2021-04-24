<template>
	<div id="app">
		<p>
			<TextBox msg="Adınız" @yaziDegisti="yaziDegisti" />
		</p>
		<Button msg="Tıklayınız." @tiklandi="butonTiklandi" />
		<p>
			{{ yazi }}
		</p>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	import Button from "./components/Button.vue";
	import TextBox from "./components/TextBox.vue";

	@Component({
		components: {
			Button,
			TextBox,
		},
	})
	export default class App extends Vue {
		private yazi = "";

		private butonTiklandi() {
			console.log("App.Vue Buton Tıklandı.");
		}
		private yaziDegisti(y: string) {
			this.yazi = y;
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
