import { Component, Vue } from "vue-property-decorator";
import { ColumnType } from './types';
import _ from 'lodash';

@Component
export class TemplateColumnMixin extends Vue {

    protected getSlotName(column: ColumnType): string {
        //if (_.isNil(column.columnName) || _.isEmpty(column.columnName)) {
        //    throw new Error('Please define a column name for template column.');
        //}
        //console.log(column.columnName);
        return "column_" + column.columnName;
    }
}