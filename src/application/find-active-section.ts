import type { CalendarRenderModel, CalendarValue } from '../types';

export function findActiveSectionIndex(
  model: CalendarRenderModel,
  value: CalendarValue,
): number {
  if (value.kind === 'month') {
    const monthIndex = model.sections.findIndex(
      (section) => section.monthValue === value.key,
    );
    return monthIndex >= 0 ? monthIndex : 0;
  }

  const sectionIndex = model.sections.findIndex((section) =>
    [...section.beforeRows, ...section.activeRows, ...section.afterRows].some(
      (row) => row.some((item) => item.value === value.key),
    ),
  );

  return sectionIndex >= 0 ? sectionIndex : 0;
}
