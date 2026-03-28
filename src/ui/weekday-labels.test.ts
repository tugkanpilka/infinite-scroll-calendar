import { describe, expect, it } from 'vitest';
import { getWeekdayLabels } from './weekday-labels';

describe('getWeekdayLabels', () => {
  it('returns Monday-start labels by default', () => {
    expect(getWeekdayLabels()).toEqual(['M', 'T', 'W', 'T', 'F', 'S', 'S']);
  });

  it('returns Monday-start labels for firstDayOfWeek = 1', () => {
    expect(getWeekdayLabels(1)).toEqual(['M', 'T', 'W', 'T', 'F', 'S', 'S']);
  });

  it('returns Sunday-start labels for firstDayOfWeek = 0', () => {
    expect(getWeekdayLabels(0)).toEqual(['S', 'M', 'T', 'W', 'T', 'F', 'S']);
  });

  it('returns Saturday-start labels for firstDayOfWeek = 6', () => {
    expect(getWeekdayLabels(6)).toEqual(['S', 'S', 'M', 'T', 'W', 'T', 'F']);
  });
});
