import type { CalendarDayItem, CalendarItem, CalendarValue } from '../types';

export interface VisibleRows {
  beforeRows: CalendarItem[][];
  activeRows: CalendarItem[][];
  afterRows: CalendarItem[][];
}

export function splitVisibleRows(
  rows: CalendarItem[][],
  value: CalendarValue,
): VisibleRows {
  if (rows.length === 0) {
    return { beforeRows: [], activeRows: [], afterRows: [] };
  }

  if (value.kind === 'month') {
    // Split at today's row (or first row) so before/after content exists
    // in the DOM — enables smooth ExpandableZone animations when
    // transitioning between month and day/week selection.
    const todayIndex = rows.findIndex((row) =>
      row.some(
        (item) => item.kind === 'day' && (item as CalendarDayItem).today,
      ),
    );
    const focusIndex = todayIndex >= 0 ? todayIndex : 0;

    return {
      beforeRows: rows.slice(0, focusIndex),
      activeRows: [rows[focusIndex]],
      afterRows: rows.slice(focusIndex + 1),
    };
  }

  const activeIndex = rows.findIndex((row) =>
    row.some((item) => item.value === value.key),
  );

  if (activeIndex < 0) {
    return {
      beforeRows: [],
      activeRows: rows,
      afterRows: [],
    };
  }

  return {
    beforeRows: rows.slice(0, activeIndex),
    activeRows: [rows[activeIndex]],
    afterRows: rows.slice(activeIndex + 1),
  };
}
