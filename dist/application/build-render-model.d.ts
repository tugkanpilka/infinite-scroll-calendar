import type { Section } from '@docbook/date-grid';
import type { CalendarMetadataMap, CalendarRenderModel, CalendarValue } from '../types';
export declare function buildRenderModel(params: {
    data: Section<Date, {
        weekNumber: number;
        weekKey: string;
        year: number;
    }>[];
    value: CalendarValue;
    metadata?: CalendarMetadataMap;
    expanded?: boolean;
}): CalendarRenderModel;
