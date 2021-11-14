<template>
    <td :class="[...dataClass, 'custom-column']">
        <component :is="column.data.customComponentName"
                   :column="column"
                   :row="row" />
    </td>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";
    import { ColumnType, DefaultBooleanColumnDataType, BooleanColumnDataType } from '../types';
    import { ConvertAlignTypeToString } from '../functions';
    import _ from 'lodash';

    @Component
    export default class CustomColumn extends Vue {
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

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
