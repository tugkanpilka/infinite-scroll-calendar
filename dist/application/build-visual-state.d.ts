import type { CalendarIndicator, CalendarMetadataMap, CalendarValue } from '../types';
interface BuildVisualStateParams {
    key: string;
    value: CalendarValue;
    selectionEnabled?: boolean;
    metadata?: CalendarMetadataMap;
    outside?: boolean;
    date?: Date;
}
export interface CalendarVisualState {
    indicator: CalendarIndicator;
    selected: boolean;
    today: boolean;
}
export declare function buildVisualState(params: BuildVisualStateParams): CalendarVisualState;
export {};
