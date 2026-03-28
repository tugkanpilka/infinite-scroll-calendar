import type { FirstDayOfWeek, Section, WeekNumberMeta } from 'date-grid';
import type { CalendarMetadataMap } from '../types';
export declare function buildData(monthsBack?: number, monthsAhead?: number, firstDayOfWeek?: FirstDayOfWeek): Section<Date, WeekNumberMeta>[];
export declare const data: Section<Date, WeekNumberMeta>[];
export declare function todayKey(): string;
export declare function thisMonthKey(): string;
export declare function thisWeekKey(): string;
export declare function makeIndicators(range: number): CalendarMetadataMap;
