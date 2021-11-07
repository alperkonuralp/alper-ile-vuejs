
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
	Boolean,
	DateTime,
}

export interface BooleanColumnDataType {
	trueText: string;
	falseText: string;
}

export class DefaultBooleanColumnDataType implements BooleanColumnDataType {
	public trueText = "Evet";
	public falseText = "Hayır";
}

export interface ColumnDataType {
	align?: AlignType;
	type?: ColumnDataTypeEnum;
	booleanColumn?: BooleanColumnDataType;
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