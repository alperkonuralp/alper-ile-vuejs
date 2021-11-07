<template>
    <td :class="[...dataClass, 'text-column']">
        {{ dataValue }}
    </td>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";
    import { ColumnType, DefaultBooleanColumnDataType, BooleanColumnDataType } from '../types';
    import { ConvertAlignTypeToString } from '../functions';
    import _ from 'lodash';

    @Component
    export default class BooleanColumn extends Vue {
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

        private get dataValue() {
            if (_.isNil(this.row[this.column.fieldName]))
                return "";

            if (this.row[this.column.fieldName])
                return this.booleanConfig.trueText;

            return this.booleanConfig.falseText;
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
