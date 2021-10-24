import { DataRow, DataSource } from "./types";

export class DataService {
    constructor(public dataSource: DataSource | null = null) {
    }
    public pageSize = 10;
    public pageIndex = 1;
    public totalRowCount = 0;


    public getPageData(): DataRow[] {

        if (this.dataSource && this.dataSource.local && this.dataSource.local.length) {
            this.totalRowCount = this.dataSource.local.length;
            return this.getPagedData(this.dataSource.local);
        }

        return [];
    }

    private getPagedData(rows: DataRow[]): DataRow[] {
        if (rows && rows.length) {
            const startIndex = (this.pageIndex - 1) * this.pageSize; // >=
            const finishIndex = startIndex + this.pageSize; // < 

            if (this.pageSize >= rows.length) {
                return rows;
            }
            else {
                return rows
                    .filter((_, index) => index >= startIndex && index < finishIndex);
            }
        }

        return [];
    }
}