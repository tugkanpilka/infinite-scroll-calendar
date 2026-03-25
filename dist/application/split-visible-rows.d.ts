import type { CalendarItem, CalendarValue } from '../types';
export interface VisibleRows {
    beforeRows: CalendarItem[][];
    activeRows: CalendarItem[][];
    afterRows: CalendarItem[][];
}
export declare function splitVisibleRows(rows: CalendarItem[][], value: CalendarValue): VisibleRows;
