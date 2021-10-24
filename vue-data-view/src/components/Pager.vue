<template>
  <div class="pager">
    <div class="pager-left">
      <span>Show 
        <select :value="pageSize" @input="emitUpdatePageSize">
          <option v-for="item in pageSizes" :key="item" :value="item">{{ item }}</option>
        </select>
        entries.
      </span>
      <span>Showing {{startRowIndex}} to {{finishRowIndex}} of {{totalRowCount}} entries</span>
    </div>
    <div class="pager-right">
      <SimplePager v-if="isSimple" 
                   :pageIndex="pageIndex" 
                   @update:pageIndex="pageIndexChanged"
                   :totalPageCount="totalPageCount" />
      <DropDownPager v-if="isDropDown" 
                     :pageIndex="pageIndex" 
                     @update:pageIndex="pageIndexChanged"
                     :totalPageCount="totalPageCount" />
    </div>
    <div class="clear"></div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue, Emit } from "vue-property-decorator";
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

    @Prop({ required: true, type: Number, default: () => 1 })
    private pageIndex!: number;

    @Prop({ required: true, type: Number })
    private totalRowCount!: number;



    @Emit("update:pageIndex")
    private pageIndexChanged(newPageIndex: number) {
      // boþ
    }

    private get isSimple(): boolean {
      return this.pagerType == PagerType.SimplePager;
    }

    private get isDropDown(): boolean {
      return this.pagerType == PagerType.DropDownPager;
    }

    private get totalPageCount(): number {
      if (this.totalRowCount > 0 && this.pageSize > 0) {
        return Math.ceil(this.totalRowCount / this.pageSize);
      }
      return 0;
    }

    private get startRowIndex(): number {
      return (this.pageIndex - 1) * this.pageSize + 1;
    }

    private get finishRowIndex(): number {
      const ret = this.startRowIndex + this.pageSize - 1;
      return ret < this.totalRowCount ? ret : this.totalRowCount;
    }

    private emitUpdatePageSize(event: Event) {
      if (event && event.target) {
        this.$emit('update:pageSize', Number((event.target as any).value));
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
