<template>
    <td :class="[...dataClass, 'boolean-column']">
        <input type="checkbox" readonly disabled v-model="dataValue" v-if="dataValue != undefined" />
    </td>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";
    import { ColumnType, DefaultBooleanColumnDataType, BooleanColumnDataType } from '../types';
    import { ConvertAlignTypeToString } from '../functions';
    import _ from 'lodash';

    @Component
    export default class BooleanCheckboxColumn extends Vue {
        @Prop({ required: true, type: Object })
        private column!: ColumnType;

        @Prop({ required: true, type: Object })
        private row!: Record<string, any>;

        private get dataClass() {
            if (this.column.data && this.column.data.align) {
                return [ConvertAlignTypeToString(this.column.data.align)];
            }
            return ["text-left"];
        }

        private get booleanConfig(): BooleanColumnDataType {
            if (this.column.data && this.column.data.booleanColumn)
                return this.column.data.booleanColumn;
            return new DefaultBooleanColumnDataType();
        }

        private get dataValue(): boolean | undefined {
            if (_.isNil(this.row[this.column.fieldName]))
                return undefined;

            if (this.row[this.column.fieldName])
                return true;

            return false;
        }
        private set dataValue(_: boolean | undefined) {
            // boş
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
