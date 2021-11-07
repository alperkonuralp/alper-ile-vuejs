<template>
    <td :class="[...dataClass, 'date-time-column']">
        {{ dataValue }}
    </td>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";
    import { ColumnType, DefaultDateTimeColumnDataType, DateTimeColumnDataType } from '../types';
    import { ConvertAlignTypeToString } from '../functions';
    import _ from 'lodash';
    import moment from 'moment';

    @Component
    export default class DateTimeColumn extends Vue {
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

        private get dateTimeConfig(): DateTimeColumnDataType {
            if (this.column.data && this.column.data.dateTimeColumn)
                return this.column.data.dateTimeColumn;
            return new DefaultDateTimeColumnDataType();
        }

        private get dataValue() {
            const rawData = this.row[this.column.fieldName];
            if (_.isNil(rawData))
                return "";

            let value: moment.Moment | null = null;

            if (_.isString(rawData))
                value = moment(rawData, this.dateTimeConfig.importFormat);

            else if (_.isNumber(rawData))
                value = moment(rawData);

            else if (moment.isDate(rawData))
                value = moment(rawData);

            else if (moment.isMoment(rawData))
                value = rawData;

            else return "";

            return value.format(this.dateTimeConfig.exportFormat);
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
