import type { FirstDayOfWeek } from 'date-grid';
import type { CalendarValue } from '../types';
export declare function isDayValue(value: CalendarValue): value is {
    kind: 'day';
    key: string;
};
export declare function isWeekValue(value: CalendarValue): value is {
    kind: 'week';
    key: string;
};
export declare function isMonthValue(value: CalendarValue): value is {
    kind: 'month';
    key: string;
};
export declare function deriveActiveMonth(value?: CalendarValue, firstDayOfWeek?: FirstDayOfWeek): string | undefined;
