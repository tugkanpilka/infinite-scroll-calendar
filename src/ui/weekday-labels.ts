import type { FirstDayOfWeek } from 'date-grid';

const DEFAULT_WEEKDAY_LABELS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

export function getWeekdayLabels(firstDayOfWeek: FirstDayOfWeek = 1): string[] {
  const offset = (firstDayOfWeek - 1 + 7) % 7;
  if (offset === 0) return DEFAULT_WEEKDAY_LABELS;
  return [
    ...DEFAULT_WEEKDAY_LABELS.slice(offset),
    ...DEFAULT_WEEKDAY_LABELS.slice(0, offset),
  ];
}
