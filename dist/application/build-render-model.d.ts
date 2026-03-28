import type { Section } from 'date-grid';
import type { CalendarMetadataMap, CalendarRenderModel, CalendarValue } from '../types';
export declare function buildRenderModel(params: {
    data: Section<Date, {
        weekNumber: number;
        weekKey: string;
        year: number;
    }>[];
    value: CalendarValue;
    selectionEnabled?: boolean;
    metadata?: CalendarMetadataMap;
    expanded?: boolean;
}): CalendarRenderModel;
