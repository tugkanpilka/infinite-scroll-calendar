import {
  addWeekNumbers,
  buildRange,
  fillAdjacentDays,
  groupByMonth,
  splitRows,
} from 'date-grid';
import type { FirstDayOfWeek, Section, WeekNumberMeta } from 'date-grid';

import type { CalendarMetadataMap } from '../types';

export function buildData(monthsBack = 12, monthsAhead = 12, firstDayOfWeek?: FirstDayOfWeek): Section<Date, WeekNumberMeta>[] {
  const today = new Date();
  const start = new Date(today.getFullYear(), today.getMonth() - monthsBack, 1);
  const end = new Date(
    today.getFullYear(),
    today.getMonth() + monthsAhead + 1,
    0,
  );
  return addWeekNumbers(
    splitRows(
      fillAdjacentDays(
        groupByMonth(buildRange({ start, end })),
        firstDayOfWeek != null ? { firstDayOfWeek } : undefined,
      ),
    ),
  ) as Section<Date, WeekNumberMeta>[];
}

export const data = buildData();

export function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

export function thisMonthKey(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}

export function thisWeekKey(): string {
  const d = new Date();
  const startOfYear = new Date(d.getFullYear(), 0, 1);
  const week = Math.ceil(
    ((d.getTime() - startOfYear.getTime()) / 86400000 +
      startOfYear.getDay() +
      1) /
      7,
  );
  return `${d.getFullYear()}-W${week}`;
}

export function makeIndicators(range: number): CalendarMetadataMap {
  const map: CalendarMetadataMap = {};
  const base = new Date();
  const seenWeeks = new Set<string>();
  const seenMonths = new Set<string>();

  for (let i = -range; i <= range; i++) {
    const d = new Date(base);
    d.setDate(d.getDate() + i);

    // Day indicators
    map[d.toISOString().slice(0, 10)] = {
      hasContent: true,
      hasUncompletedTodo: i % 3 === 0,
    };

    // Week indicators
    const startOfYear = new Date(d.getFullYear(), 0, 1);
    const week = Math.ceil(
      ((d.getTime() - startOfYear.getTime()) / 86400000 +
        startOfYear.getDay() +
        1) /
        7,
    );
    const weekKey = `${d.getFullYear()}-W${week}`;
    if (!seenWeeks.has(weekKey)) {
      seenWeeks.add(weekKey);
      map[weekKey] = { hasContent: true, hasUncompletedTodo: week % 2 === 0 };
    }

    // Month indicators
    const monthKey = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
    if (!seenMonths.has(monthKey)) {
      seenMonths.add(monthKey);
      map[monthKey] = {
        hasContent: true,
        hasUncompletedTodo: (d.getMonth() + 1) % 2 === 0,
      };
    }
  }
  return map;
}
