<template>
	<label>
		{{msg}} : 
		<input type="text" v-model="value" @input="yaziDegisti($event.target.value)" />
	</label>
</template>

<script lang="ts">
	import { Component, Emit, Prop, Vue } from "vue-property-decorator";

	@Component
	export default class TextBox extends Vue {
		@Prop({ default: () => 'Veri' })
		private msg!: string;


		@Prop()
		private value!: string;


		@Emit('input')
		private yaziDegisti(y:string) {
			// boş
		}
	}
</script>