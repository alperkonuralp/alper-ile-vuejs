import { DataRow, DataSource } from "./types";

export class DataService {
	constructor(public dataSource: DataSource | null = null) {
	}

	public getPageData(): DataRow[] {

		if (this.dataSource&&this.dataSource.local && this.dataSource.local.length) {
			return this.dataSource.local;
		}

		return [];
	}
}