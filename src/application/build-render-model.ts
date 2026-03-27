import { format } from 'date-fns';
import type { Cell, Section } from 'date-grid';

import { buildVisualState } from './build-visual-state';
import { splitVisibleRows } from './split-visible-rows';
import type {
  CalendarDayItem,
  CalendarItem,
  CalendarMetadataMap,
  CalendarRenderModel,
  CalendarValue,
  CalendarWeekItem,
} from '../types';

function buildMonthLabel(section: Section): string {
  if (typeof section.month === 'number') {
    return format(new Date(section.year, section.month - 1, 1), 'LLLL');
  }

  return section.weekKey ?? section.id;
}

function mapRow(
  row: Section<
    Date,
    { weekNumber: number; weekKey: string; year: number }
  >['rows'][number],
  value: CalendarValue,
  selectionEnabled = true,
  metadata?: CalendarMetadataMap,
): CalendarItem[] {
  return row.items.map((item) => {
    if (item.kind === 'marker') {
      const visualState = buildVisualState({
        key: item.meta?.weekKey ?? item.id,
        value,
        selectionEnabled,
        metadata,
      });

      return {
        kind: 'week',
        key: item.id,
        label: item.meta?.weekNumber ?? 0,
        value: item.meta?.weekKey ?? item.id,
        weekNumber: item.meta?.weekNumber ?? 0,
        selected: visualState.selected,
        indicator: visualState.indicator,
      } satisfies CalendarWeekItem;
    }

    const cell = item as Cell;
    const visualState = buildVisualState({
      key: cell.dayKey,
      value,
      selectionEnabled,
      metadata,
      outside: !cell.inMonth,
      date: cell.date,
    });

    return {
      kind: 'day',
      key: cell.dayKey,
      label: cell.date.getDate(),
      value: cell.dayKey,
      date: cell.date,
      today: visualState.today,
      selected: visualState.selected,
      outside: !cell.inMonth,
      indicator: visualState.indicator,
    } satisfies CalendarDayItem;
  });
}

export function buildRenderModel(params: {
  data: Section<Date, { weekNumber: number; weekKey: string; year: number }>[];
  value: CalendarValue;
  selectionEnabled?: boolean;
  metadata?: CalendarMetadataMap;
  expanded?: boolean;
}): CalendarRenderModel {
  const {
    data,
    value,
    selectionEnabled = true,
    metadata,
    expanded,
  } = params;

  return {
    expanded,
    sections: data.map((section) => {
      const rows = section.rows.map((row) =>
        mapRow(row, value, selectionEnabled, metadata),
      );
      const visibleRows = splitVisibleRows(rows, value);
      const monthValue = section.monthKey ?? section.id;
      const monthIndicator = buildVisualState({
        key: monthValue,
        value,
        selectionEnabled,
        metadata,
      }).indicator;

      return {
        key: section.id,
        monthLabel: buildMonthLabel(section),
        monthValue,
        year: section.year,
        month: section.month,
        selected: value.kind === 'month' && value.key === monthValue,
        indicator: monthIndicator,
        ...visibleRows,
      };
    }),
  };
}
