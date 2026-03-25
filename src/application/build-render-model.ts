import { format } from 'date-fns';
import type { Cell, Section } from '@docbook/date-grid';

import { buildVisualState } from './build-visual-state';
import { splitVisibleRows } from './split-visible-rows';
import type {
  CalendarItem,
  CalendarMetadataMap,
  CalendarRenderModel,
  CalendarValue,
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
  metadata?: CalendarMetadataMap,
): CalendarItem[] {
  return row.items.map((item) => {
    if (item.kind === 'marker') {
      const visualState = buildVisualState({
        key: item.meta?.weekKey ?? item.id,
        value,
        metadata,
      });

      return {
        kind: 'week',
        key: item.id,
        label: item.meta?.weekNumber ?? 0,
        value: item.meta?.weekKey ?? item.id,
        selected: visualState.selected,
        indicator: visualState.indicator,
      } satisfies CalendarItem;
    }

    const cell = item as Cell;
    const visualState = buildVisualState({
      key: cell.dayKey,
      value,
      metadata,
      outside: !cell.inMonth,
      date: cell.date,
    });

    return {
      kind: 'day',
      key: cell.dayKey,
      label: cell.date.getDate(),
      value: cell.dayKey,
      today: visualState.today,
      selected: visualState.selected,
      outside: !cell.inMonth,
      indicator: visualState.indicator,
    } satisfies CalendarItem;
  });
}

export function buildRenderModel(params: {
  data: Section<Date, { weekNumber: number; weekKey: string; year: number }>[];
  value: CalendarValue;
  metadata?: CalendarMetadataMap;
  expanded?: boolean;
}): CalendarRenderModel {
  const { data, value, metadata, expanded } = params;

  return {
    expanded,
    sections: data.map((section) => {
      const rows = section.rows.map((row) => mapRow(row, value, metadata));
      const visibleRows = splitVisibleRows(rows, value);
      const monthValue = section.monthKey ?? section.id;
      const monthIndicator = buildVisualState({
        key: monthValue,
        value,
        metadata,
      }).indicator;

      return {
        key: section.id,
        monthLabel: buildMonthLabel(section),
        monthValue,
        selected: value.kind === 'month' && value.key === monthValue,
        indicator: monthIndicator,
        ...visibleRows,
      };
    }),
  };
}
