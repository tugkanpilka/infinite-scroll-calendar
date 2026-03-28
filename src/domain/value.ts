import { format, startOfISOWeek, parseISO } from 'date-fns';

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

export function deriveActiveMonth(value?: CalendarValue): string | undefined {
  if (!value) return undefined;
  if (value.kind === 'month') return value.key;
  if (value.kind === 'day') return value.key.slice(0, 7);
  if (value.kind === 'week') {
    return format(startOfISOWeek(parseISO(value.key)), 'yyyy-MM');
  }
  return undefined;
}
