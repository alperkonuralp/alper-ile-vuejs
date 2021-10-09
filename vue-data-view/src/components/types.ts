
export enum AlignType {
    Left,
    Right,
    Center,
}

export interface ColumnHeaderType {
    align: AlignType;
}

export interface ColumnDataType {
    align: AlignType;
}

export interface ColumnType {
    fieldName: string;
    title: string;
    header?: ColumnHeaderType;
    data?: ColumnDataType;
}

export enum PagerType {
    SimplePager,
    DropDownPager,
}