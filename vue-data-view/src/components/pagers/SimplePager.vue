<template>
	<div class="simple-pager">
		<button v-if="pageIndex != 1"
						@click="pageIndexChanged(1)">
			First
		</button>
		<button v-if="pageIndex != 1"
						@click="pageIndexChanged(pageIndex - 1)">
			Previous
		</button>
		<button v-for="item in totalPageCount"
						:key="item"
						@click="pageIndexChanged(item)"
						:disabled="item == pageIndex">
			{{item}}
		</button>
		<button v-if="pageIndex != totalPageCount"
						@click="pageIndexChanged(pageIndex + 1)">
			Next
		</button>
		<button v-if="pageIndex != totalPageCount"
						@click="pageIndexChanged(totalPageCount)">
			Last
		</button>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue, Emit } from "vue-property-decorator";

	@Component
	export default class SimplePager extends Vue {
		@Prop({ required: true, type: Number, default: () => 1 })
		private pageIndex!: number;

		@Prop({ required: true, type: Number })
		private totalPageCount!: number;

		@Emit("update:pageIndex")
		private pageIndexChanged(newPageIndex: number) {
			// boþ
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.simple-pager {
		float:right;
	}
</style>
