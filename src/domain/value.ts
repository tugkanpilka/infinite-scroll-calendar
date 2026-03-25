import type { CalendarValue } from '../types';

export function isDayValue(
  value: CalendarValue,
): value is { kind: 'day'; key: string } {
  return value.kind === 'day';
}

export function isWeekValue(
  value: CalendarValue,
): value is { kind: 'week'; key: string } {
  return value.kind === 'week';
}

export function isMonthValue(
  value: CalendarValue,
): value is { kind: 'month'; key: string } {
  return value.kind === 'month';
}
