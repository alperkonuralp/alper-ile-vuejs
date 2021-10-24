<template>
	<div class="pager-selector">
		<button :title="selectedTypeText" @click="showContainer = !showContainer">{{selectedTypeCode}}</button>
		<div class="pager-selector-container" v-if="showContainer">
			<ul>
				<li :class="pagerType==0 ? ['active', 'disabled']:[]"
						@click="pagerTypeChanged(0)"
						>Simple Pager</li>
				<li :class="pagerType==1 ? ['active', 'disabled']:[]"
						@click="pagerTypeChanged(1)"
						>Drop Down Pager</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue, Emit } from "vue-property-decorator";
	import { PagerType } from '../types';

	@Component
	export default class SimplePager extends Vue {
		private showContainer = false;

		@Prop({
			required: true,
			type: Number,
		})
		private pagerType!: PagerType;

		@Emit("update:pagerType")
		private pagerTypeChanged(newPagerType: number) {
			this.showContainer = false;
		}

		private get selectedTypeCode(): string {
			switch (this.pagerType) {
				case PagerType.SimplePager:
					return "S";
				case PagerType.DropDownPager:
					return "D";
				default:
					return "S";
			}
		}

		private get selectedTypeText(): string {
			switch (this.pagerType) {
				case PagerType.SimplePager:
					return "Simple Pager";
				case PagerType.DropDownPager:
					return "Drop Down Pager";
				default:
					return "Simple Pager";
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.pager-selector {
		position: relative;
		float: right;
		margin-left: 5px;

		.pager-selector-container {
			position: absolute;
			top: calc(100% + 1px);
			right: 0;
			width: auto;
			height: auto;
			min-height: 30px;
			box-shadow: 0 4px 12px rgba(0,0,0,.1);

			ul {
				margin: 2px 0;
				padding: 0;
				list-style: none;
				width: 200px;
				background-color: #fff;
				color: #111433;

				li {
					margin: 1px 0;
					padding: 5px;
					word-wrap: normal;
					cursor: pointer;

					&.active, &:hover {
						color: #3f8654;
					}

					&.disabled {
						cursor: default;
					}
				}
			}
		}
	}
</style>
