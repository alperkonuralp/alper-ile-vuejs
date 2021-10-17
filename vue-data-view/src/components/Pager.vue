<template>
	<div class="pager">
		<div class="pager-left">
			<span>Show 
				<select :value="pageSize" @input="emitUpdatePageSize">
					<option v-for="item in pageSizes" :key="item" :value="item">{{ item }}</option>
				</select>
				entries.
			</span>
			<span>Showing 41 to 50 of 57 entries</span>
		</div>
		<div class="pager-right">
			<SimplePager v-if="isSimple" />
			<DropDownPager v-if="isDropDown" />
		</div>
		<div class="clear"></div>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator";
	import SimplePager from './pagers/simple-pager.vue';
	import DropDownPager from './pagers/drop-down-pager.vue';
	import { PagerType } from './types';

	@Component({
		components: { SimplePager, DropDownPager }
	})
	export default class Pager extends Vue {

		@Prop({
			required: false,
			type: Number,
			default: () => PagerType.SimplePager,
		})
		private pagerType!: PagerType;

		@Prop({ required: false, type: Array })
		private pageSizes!: number[];

		@Prop({ required: false, type: Number, default: () => 10 })
		private pageSize!: number;


		private get isSimple(): boolean {
			return this.pagerType == PagerType.SimplePager;
		}

		private get isDropDown(): boolean {
			return this.pagerType == PagerType.DropDownPager;
		}

		private emitUpdatePageSize($event: Event) {
			if ($event) {
				this.$emit('update:pageSize', Number($event.target.value));
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.pager {
		margin: 5px 0;
		padding: 10px 10px;
		background-color: blue;
		color: white;
		text-align: left;

		.pager-left {
			float: left;
			width: 50%;
			text-align: left;
		}

		.pager-right {
			float: left;
			width: 50%;
			text-align: right;
		}

		.clear {
			clear: both;
		}
	}
</style>
