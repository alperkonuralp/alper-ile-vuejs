<template>
    <div class="data-table">
        <table style="width:100%">
            <thead>
                <tr>
                    <HeaderColumn v-for="column in columnList" 
                                  :key="column.fieldName"
                                  :column="column"></HeaderColumn>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in dataList"
                    :key="index">
                    <DataColumn v-for="column in columnList"
                                :key="'' + index + '-' + column.fieldName"
                                :column="column"
                                :row="row">
                    </DataColumn>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";
    import { ColumnType } from './types';
    import HeaderColumn from "./HeaderColumn.vue";
    import DataColumn from "./DataColumn.vue";

    @Component({
        components: {
            HeaderColumn,
            DataColumn,
        }
    })
    export default class DataView extends Vue {
        @Prop({ required: true, type: Array })
        private columnList!: ColumnType[];

        @Prop({ required: false, type: Array })
        private dataList!: any[];
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
