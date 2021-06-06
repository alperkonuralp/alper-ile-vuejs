export interface MenuItem {
	text: string;
	url?: string;
	onClick?: () => void;
}

export enum DropDownMenuPosition {
	Left = "left",
	Right = "right"
}