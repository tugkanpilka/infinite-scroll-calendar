import type { CalendarItem, CalendarValue } from '../types';

export interface VisibleRows {
  beforeRows: CalendarItem[][];
  activeRows: CalendarItem[][];
  afterRows: CalendarItem[][];
}

export function splitVisibleRows(
  rows: CalendarItem[][],
  value: CalendarValue,
): VisibleRows {
  if (value.kind === 'month') {
    return {
      beforeRows: [],
      activeRows: rows,
      afterRows: [],
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
