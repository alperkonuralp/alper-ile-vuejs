<template>
    <div class="data-view">
        <TitleBar :title="title" v-if="(title || '') != ''"/>
        <SearchBar v-if="showSearchBar" :columnList="columnList" />
        <table style="width:100%">
            <thead>
                <tr class="header-row">
                    <td v-if="showIndexColumn">#</td>
                    <HeaderColumn v-for="column in columnList" 
                                  :key="'header-' + (column.fieldName || column.columnName || column.data.customComponentName)"
                                  :column="column"></HeaderColumn>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in pageData"
                    :key="index"
                    class="data-row">

                    <td v-if="showIndexColumn">{{startRowIndex + index}}</td>

                    <component v-for="column in columnList"
                               :key="'' + index + '-' + (column.fieldName || column.columnName || column.data.customComponentName)"
                               :is="columnTypeComponentName(column)"
                               :column="column"
                               :row="row"
                               >
                        <template v-slot:[getSlotName(column)]="tcv">
                            <slot :name="getSlotName(column)" v-bind="tcv">
                            </slot>
                        </template>
                    </component>
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
    import { mixins } from 'vue-class-component';
    import { Component, Prop, Vue, Watch } from "vue-property-decorator";
    import { ColumnType, PagerType, DataSource, DataRow, ColumnDataTypeEnum } from './types';
    import HeaderColumn from "./HeaderColumn.vue";
    import Pager from "./Pager.vue";
    import SearchBar from "./SearchBar.vue";
    import TitleBar from "./TitleBar.vue";
    import { DataService } from './data-service';
    import {
        ColumnNameList, TextColumn, NumberColumn, BooleanColumn, DateTimeColumn, BooleanCheckboxColumn,
        TemplateColumn, CustomColumn,
    } from './columns';
    import { TemplateColumnMixin } from './template-column-mixin';

    @Component({
        components: {
            HeaderColumn,
            Pager,
            SearchBar,
            TitleBar,
            TextColumn,
            NumberColumn,
            BooleanColumn,
            DateTimeColumn,
            BooleanCheckboxColumn,
            TemplateColumn,
            CustomColumn,
        }
    })
    export default class DataView extends mixins(TemplateColumnMixin) {
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


        private columnTypeComponentName(column: ColumnType) {
            if (column.data && column.data.type) {
                return ColumnNameList[column.data.type];
            }
            return ColumnNameList[0];
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
