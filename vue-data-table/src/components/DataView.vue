<template>
    <div class="data-table">
        <table style="width:100%">
            <thead>
                <tr>
                    <th v-for="column in columnList" 
                        :key="column.fieldName">{{column.title}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in dataList"
                    :key="index">
                    <td v-for="column in columnList"
                        :key="'' + index + '-' + column.fieldName">
                        {{ row[column.fieldName] }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";

    @Component
    export default class DataView extends Vue {
        @Prop({ required: true, type: Array })
        private columnList!: { fieldName: string, title: string }[];

        @Prop({ required: false, type: Array })
        private dataList!: any[];
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
