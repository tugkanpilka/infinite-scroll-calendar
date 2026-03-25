import type { Section, WeekNumberMeta } from '@docbook/date-grid';

export type CalendarValue =
  | { kind: 'day'; key: string }
  | { kind: 'week'; key: string }
  | { kind: 'month'; key: string };

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

export type CalendarItem =
  | {
      kind: 'day';
      key: string;
      label: number;
      value: string;
      today: boolean;
      selected: boolean;
      outside: boolean;
      indicator: CalendarIndicator;
    }
  | {
      kind: 'week';
      key: string;
      label: number;
      value: string;
      selected: boolean;
      indicator: CalendarIndicator;
    };

export interface CalendarSection {
  key: string;
  monthLabel: string;
  monthValue: string;
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

export interface CalendarProps {
  data: Section<Date, WeekNumberMeta>[];
  value?: CalendarValue;
  defaultValue?: CalendarValue;
  onValueChange?: (value: CalendarValue) => void;
  metadata?: CalendarMetadataMap;
  expanded?: boolean;
  defaultExpanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
}

export interface CalendarPureProps {
  model: CalendarRenderModel;
  onDaySelect?: (value: string) => void;
  onWeekSelect?: (value: string) => void;
  onMonthSelect?: (value: string) => void;
  onExpandedChange?: (expanded: boolean) => void;
}
