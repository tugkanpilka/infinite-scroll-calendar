import type { ComponentType, ReactNode } from 'react';
import type { Section, WeekNumberMeta } from 'date-grid';
export type CalendarValue = {
    kind: 'day';
    key: string;
} | {
    kind: 'week';
    key: string;
} | {
    kind: 'month';
    key: string;
};
export interface CalendarSelection {
    value: CalendarValue;
    enabled?: boolean;
}
export interface CalendarMetadata {
    hasContent?: boolean;
    hasUncompletedTodo?: boolean;
    hasCompletedTodo?: boolean;
}
export type CalendarMetadataMap = Record<string, CalendarMetadata>;
export type CalendarIndicator = false | 'primary' | 'secondary';
export interface CalendarDayItem {
    kind: 'day';
    key: string;
    label: number;
    value: string;
    date: Date;
    today: boolean;
    selected: boolean;
    outside: boolean;
    indicator: CalendarIndicator;
}
export interface CalendarWeekItem {
    kind: 'week';
    key: string;
    label: number;
    value: string;
    weekNumber: number;
    selected: boolean;
    indicator: CalendarIndicator;
}
export type CalendarItem = CalendarDayItem | CalendarWeekItem;
export interface CalendarSection {
    key: string;
    monthLabel: string;
    monthValue: string;
    year: number;
    month?: number;
    selected: boolean;
    indicator: CalendarIndicator;
    beforeRows: CalendarItem[][];
    activeRows: CalendarItem[][];
    afterRows: CalendarItem[][];
}
export interface CalendarRenderModel {
    sections: CalendarSection[];
    expanded?: boolean;
}
export type CalendarClassNameKey = 'root' | 'grid' | 'section' | 'row' | 'day' | 'week' | 'month' | 'weekdayHeader' | 'dayName' | 'toggle' | 'expandableZone';
export type CalendarClassNames = Partial<Record<CalendarClassNameKey, string>>;
export interface CalendarFormatters {
    dayLabel?: (item: CalendarDayItem) => ReactNode;
    weekLabel?: (item: CalendarWeekItem) => ReactNode;
    monthLabel?: (section: CalendarSection) => ReactNode;
    toggleLabel?: (expanded: boolean) => ReactNode;
}
export interface CalendarDaySlotProps {
    item: CalendarDayItem;
    label: ReactNode;
    className?: string;
    onSelect?: () => void;
}
export interface CalendarWeekSlotProps {
    item: CalendarWeekItem;
    label: ReactNode;
    className?: string;
    onSelect?: () => void;
}
export interface CalendarMonthSlotProps {
    section: CalendarSection;
    label: ReactNode;
    className?: string;
    onSelect?: () => void;
}
export interface CalendarDayNameSlotProps {
    index: number;
    label: ReactNode;
    className?: string;
}
export interface CalendarWeekdayHeaderSlotProps {
    labels: ReactNode[];
    className?: string;
    dayNameClassName?: string;
}
export interface CalendarToggleSlotProps {
    expanded: boolean;
    label: ReactNode;
    className?: string;
    onToggle?: () => void;
}
export interface CalendarSlots {
    day?: ComponentType<CalendarDaySlotProps>;
    week?: ComponentType<CalendarWeekSlotProps>;
    month?: ComponentType<CalendarMonthSlotProps>;
    dayName?: ComponentType<CalendarDayNameSlotProps>;
    weekdayHeader?: ComponentType<CalendarWeekdayHeaderSlotProps>;
    toggle?: ComponentType<CalendarToggleSlotProps>;
}
export interface CalendarCustomization {
    classNames?: CalendarClassNames;
    weekdayLabels?: string[];
    formatters?: CalendarFormatters;
    slots?: CalendarSlots;
}
export interface CalendarProps {
    data: Section<Date, WeekNumberMeta>[];
    value?: CalendarValue;
    defaultValue?: CalendarValue;
    onValueChange?: (value: CalendarValue) => void;
    selectionEnabled?: boolean;
    metadata?: CalendarMetadataMap;
    expanded?: boolean;
    defaultExpanded?: boolean;
    onExpandedChange?: (expanded: boolean) => void;
    customization?: CalendarCustomization;
}
export interface CalendarPureProps {
    model: CalendarRenderModel;
    onDaySelect?: (value: string) => void;
    onWeekSelect?: (value: string) => void;
    onMonthSelect?: (value: string) => void;
    onExpandedChange?: (expanded: boolean) => void;
    customization?: CalendarCustomization;
}
