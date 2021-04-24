<template>
	<span>
		<input type="button" :value="msg" @click="butonaBasildi" />
	</span>
</template>

<script lang="ts">
	import { Component, Emit, Prop, Vue } from "vue-property-decorator";

	@Component
	export default class Button extends Vue {
		@Prop({ default: () => 'Basınız' })
		private msg!: string;

		@Emit("tiklandi")
		private butonaBasildi() {
			console.log("Butona Basıldı!...");
		}

	}
</script>