
export enum AlignType {
	Left,
	Right,
	Center,
}

export interface ColumnHeaderType {
	align: AlignType;
}

export enum ColumnDataTypeEnum {
	Text,
	Number,
	DateTime,
}

export interface ColumnDataType {
	align?: AlignType;
	type?: ColumnDataTypeEnum;
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
	Custom,
}

export type DataRow = Record<string, any>;

export interface DataSource {
	local: DataRow[];
}