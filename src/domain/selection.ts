import type { CalendarSelection, CalendarValue } from '../types';

export function createSelection(
  value: CalendarValue,
  enabled = true,
): CalendarSelection {
  return { value, enabled };
}
