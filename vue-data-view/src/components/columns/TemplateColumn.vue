<template>
    <td :class="[...dataClass, 'template-column']">
        <slot :name="slotName" v-bind="{column, row}">
        </slot>
    </td>
</template>

<script lang="ts">
    import { mixins } from 'vue-class-component';
    import { Component, Prop, Vue } from "vue-property-decorator";
    import { ColumnType } from '../types';
    import { ConvertAlignTypeToString } from '../functions';
    import _ from 'lodash';
    import { TemplateColumnMixin } from '../template-column-mixin';

    @Component
    export default class TemplateColumn extends mixins(TemplateColumnMixin) {
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

        private get slotName(): string {
            return this.getSlotName(this.column);
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
