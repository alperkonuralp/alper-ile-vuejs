<template>
	<div id="app">
		<Header page-title="Demo App 1"
						logoUrl="./logo.jpg"
						searchButtonText="S"
						@searchSubmit="searchSubmit" />

		<p>{{ new Date() }}</p>
		<p>
			<DropDownMenu button-text="Menu"
										:menuItems="menuItems"
										menuPosition="right" />
		</p>
		<img alt="Vue logo" src="./assets/logo.png" />
		<p>{{ searchText }}</p>

		<HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />

		<div>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget vehicula ipsum, vitae congue augue. Nullam mi nunc, dapibus vel iaculis id, commodo at orci. Cras vel pulvinar metus. Cras tincidunt egestas leo, ut mollis magna aliquam nec. Mauris pretium ut lectus eget euismod. Proin at aliquam arcu. Nulla pretium enim velit, et tincidunt est tempus ac. Duis rutrum sem eget dignissim faucibus. Nam tincidunt ut sem eu placerat. Vestibulum tempor, magna tincidunt iaculis suscipit, lacus est efficitur velit, feugiat luctus eros libero vel erat. Integer varius risus arcu, eget varius justo scelerisque ac.</p>

			<p>Fusce quis viverra erat, nec suscipit libero. Curabitur dignissim convallis magna. Duis ornare ac nisl quis pulvinar. Integer tempus ante eros, et rhoncus nisi congue ut. Morbi pretium, massa gravida mollis maximus, neque ante convallis mi, vel consectetur orci turpis ut magna. Maecenas congue arcu magna. Proin non molestie elit. Praesent risus orci, dignissim et imperdiet at, accumsan id lectus. Curabitur vehicula vestibulum elit id ornare. Integer eu nisl malesuada, viverra risus eu, tincidunt odio. Praesent in hendrerit lorem. Proin sagittis lacinia lectus, vitae condimentum urna lobortis at.</p>

			<p>
				Maecenas fermentum ac erat in dictum. Aliquam orci ligula, varius posuere libero sit amet, imperdiet hendrerit nulla. Vivamus feugiat maximus quam sit amet consectetur. Vestibulum sit amet pharetra tellus, ut iaculis tortor. Suspendisse vestibulum justo vitae purus tristique mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras eu venenatis ex, sed posuere massa. Mauris eleifend nisi in condimentum tempor. Nam euismod imperdiet lorem id iaculis. Nulla fringilla odio enim, non fermentum tortor volutpat eu. Cras quis auctor sem. Curabitur sit amet ex sit amet mi mollis fermentum. Aliquam gravida lacus eu pulvinar eleifend.
			</p>

			<p>
				Aliquam tincidunt imperdiet justo, sit amet maximus risus ornare egestas. Donec mattis consectetur est, vitae vulputate odio suscipit tincidunt. Pellentesque ut magna eget dolor pharetra semper non vel lectus. Nunc pulvinar, augue vel efficitur lacinia, mauris quam finibus mi, quis iaculis felis elit ac elit. Phasellus accumsan tempus vestibulum. Suspendisse potenti. Vestibulum blandit sit amet velit in consequat. In ut congue dui. Nam lobortis dictum nisl eu consectetur. Aliquam erat volutpat.
			</p>

			<p>Vestibulum nulla ligula, varius at arcu id, mattis tempus magna. Cras pretium quam nec tempus sodales. Suspendisse sapien tellus, sagittis et mauris id, ultrices finibus nunc. Suspendisse malesuada ut dui vel aliquet. Mauris pretium dui dolor, dictum aliquam turpis facilisis vitae. Sed ac lectus porttitor, interdum metus facilisis, malesuada nisl. Duis elementum tellus at tincidunt sollicitudin. Suspendisse vehicula quam vitae ipsum semper egestas. Maecenas purus ligula, congue ut leo quis, dictum tristique metus. Vestibulum ut varius mauris, non finibus augue. Sed aliquet nulla elit, id molestie lorem luctus eu. Maecenas eu sollicitudin lectus, eget suscipit sem. Mauris in venenatis magna. Integer vel imperdiet lectus, eu iaculis nisl. Fusce euismod aliquam est, sed placerat nulla placerat sed. Proin accumsan sapien vitae nibh semper faucibus.</p>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	import HelloWorld from "./components/HelloWorld.vue";
	import { MenuItem } from "./components/DropDownMenu";

	@Component({
		components: {
			HelloWorld,
		},
	})
	export default class App extends Vue {

		private searchText = String();
		private menuItems: MenuItem[] = [
			{ text: "Home", url: '/' },
			{ text: "About", url: 'https://www.google.com' },
			{ text: "Services", onClick: () => { console.log('tıklandı.'); } },
		];

		private searchSubmit(text: string) {
			this.searchText = text;
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
