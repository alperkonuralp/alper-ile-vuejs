<template>
	<label>
		{{msg}} : 
		<input type="text" v-model="yazilan" @change="yaziDegisti(yazilan)" />
	</label>
</template>

<script lang="ts">
	import { Component, Emit, Prop, Vue } from "vue-property-decorator";

	@Component
	export default class TextBox extends Vue {
		@Prop({ default: () => 'Veri' })
		private msg!: string;

		private yazilan = "";

		@Emit('yaziDegisti')
		private yaziDegisti(y:string) {
			// boş
		}
	}
</script>