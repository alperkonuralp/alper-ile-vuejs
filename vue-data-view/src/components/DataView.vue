<template>
    <div class="data-view">
        <TitleBar :title="title" v-if="(title || '') != ''"/>
        <SearchBar v-if="showSearchBar" />
        <table style="width:100%">
            <thead>
                <tr class="header-row">
                    <td v-if="showIndexColumn">#</td>
                    <HeaderColumn v-for="column in columnList" 
                                  :key="column.fieldName"
                                  :column="column"></HeaderColumn>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in pageData"
                    :key="index"
                    class="data-row">

                    <td v-if="showIndexColumn">{{startRowIndex + index}}</td>

                    <DataColumn v-for="column in columnList"
                                :key="'' + index + '-' + column.fieldName"
                                :column="column"
                                :row="row">
                    </DataColumn>
                </tr>
            </tbody>
        </table>
        <Pager 
               v-if="showPager" 
               :pagerType="innerPagerType"
               @update:pagerType="updatePagerType"
               :pageSizes="pageSizes"
               :pageSize.sync="dataService.pageSize"
               :pageIndex.sync="dataService.pageIndex"
               :totalRowCount="dataService.totalRowCount"
               :showPagerSelector="showPagerSelector"
               />
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue, Watch } from "vue-property-decorator";
    import { ColumnType, PagerType, DataSource, DataRow } from './types';
    import HeaderColumn from "./HeaderColumn.vue";
    import DataColumn from "./DataColumn.vue";
    import Pager from "./Pager.vue";
    import SearchBar from "./SearchBar.vue";
    import TitleBar from "./TitleBar.vue";
    import { DataService } from './data-service';

    @Component({
        components: {
            HeaderColumn,
            DataColumn,
            Pager,
            SearchBar,
            TitleBar,
        }
    })
    export default class DataView extends Vue {
        // Data
        private pageData: DataRow[] = [];
        private dataService: DataService = new DataService();
        private innerPagerType: PagerType = PagerType.SimplePager;

        // Props
        @Prop({ required: true, type: Array })
        private columnList!: ColumnType[];

        @Prop({ required: false, type: Object })
        private dataSource!: DataSource;

        @Prop({ required: false, type: String, default: () => '' })
        private title!: string;

        @Prop({ required: false, type: Boolean, default: () => false })
        private showSearchBar!: boolean;

        @Prop({ required: false, type: Boolean, default: () => true })
        private showPager!: boolean;

        @Prop({ required: false, type: Boolean, default: () => true })
        private showPagerSelector!: boolean;

        @Prop({
            required: false,
            type: Number,
            default: () => PagerType.SimplePager,
        })
        private pagerType!: PagerType;

        @Prop({ required: false, type: Array, default: () => [10, 25, 50, 100] })
        private pageSizes!: number[];

        @Prop({ required: false, type: Boolean, default: () => true })
        private showIndexColumn!: boolean;

        private get startRowIndex(): number {
            return (this.dataService.pageIndex - 1) * this.dataService.pageSize + 1;
        }

        private mounted() {
            this.dataService.dataSource = this.dataSource;
            this.innerPagerType = this.pagerType;

            this.refresh();
        }

        private refresh() {
            this.pageData = this.dataService.getPageData();
        }

        @Watch("dataSource", { deep: true })
        private dataSourceChanged(newDataSource: DataSource) {
            if (this.dataService.dataSource !== newDataSource) {
                this.dataService.dataSource = newDataSource;
            }
            this.refresh();
        }

        @Watch("dataService.pageSize")
        private pageSizeChanged() {
            this.refresh();
        }

        @Watch("dataService.pageIndex")
        private pageIndexChanged() {
            this.refresh();
        }

        @Watch("pagerType")
        private pagerTypeChanged(pagerType: PagerType) {
            this.innerPagerType = pagerType;
        }

        private updatePagerType(newPagerType: PagerType) {
            this.innerPagerType = newPagerType;
            this.$emit("update:pagerType", newPagerType);
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .data-view {

        tr.header-row {
            background-color: #ddd;
        }

        tr.data-row {
            background-color: #eeeeee;
            cursor: pointer;

            &:nth-child(odd) {
                background-color: #fff;
            }

            &:hover {
                background-color: #ccc;
                color: forestgreen;
            }
        }
    }
</style>
