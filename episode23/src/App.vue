<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png" />
		<ComponentContainer text="Adınız : ">
			<TextBox v-model="firstname" />
		</ComponentContainer>
		<ComponentContainer text="Soyadınız : ">
			<TextBox v-model="lastname" />
		</ComponentContainer>
		<ComponentContainer text="Yaşınız : ">
			<DropDownList v-model="age" :items="ages" />
		</ComponentContainer>
		<div>
			{{ firstname }} {{ lastname }} - {{ age }}
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	import HelloWorld from "./components/HelloWorld.vue";

	@Component({
		components: {
			HelloWorld,
		},
	})
	export default class App extends Vue {
		private firstname = String();
		private lastname = String();
		private age = 18;
		private ages = Array.from({ length: 100 }, (value, key) => key + 1);
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
