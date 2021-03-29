<template>
	<div id="app">
		<p><label>Adınız : <input type="text" v-model="ad" /></label></p>
		<p>{{ ad }}</p>
		<p><label><input type="checkbox" v-model="eminmisiniz" /> Emin misiniz?</label></p>
		<p v-if="!eminmisiniz">Emin misiniz seçili değil.</p>
		<p v-else>Emin misiniz seçili.</p>
		<h2>Veriler</h2>
		<table align="center">
			<thead>
				<tr>
					<th>#</th>
					<th>Ad</th>
					<th>Soyad</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(veri, i) in servisVerisi" 
						:key="veri.id" 
						:class="(i % 2) == 0 ? 'gribg': ''">
					<td>{{veri.id}}</td>
					<td>{{veri.ad}}</td>
					<td>{{veri.soyad}}</td>
				</tr>
			</tbody>			
		</table>
		<p><button @click="indeks++">Tıkla</button></p>
		<p>{{indeks}}</p>
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
		private ad = "Alper";
		private eminmisiniz = false;
		private servisVerisi = [
			{ id: 1, ad: 'Alper', soyad: 'Konuralp' },
			{ id: 2, ad: 'Burcu', soyad: 'Konuralp' },
			{ id: 3, ad: 'Yağmur', soyad: 'Konuralp' },
		];
		private indeks = 1;
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
	.gribg{
		background-color: lightgray;
	}
</style>
