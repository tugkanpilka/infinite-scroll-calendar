// @vitest-environment jsdom
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import {
  addWeekNumbers,
  buildRange,
  fillAdjacentDays,
  groupByMonth,
  splitRows,
} from 'date-grid';

import Calendar from './root';

import type { FirstDayOfWeek } from 'date-grid';

function buildData(firstDayOfWeek?: FirstDayOfWeek) {
  return addWeekNumbers(
    splitRows(
      fillAdjacentDays(
        groupByMonth(
          buildRange({
            start: new Date('2026-03-01T00:00:00.000Z'),
            end: new Date('2026-03-31T00:00:00.000Z'),
          }),
        ),
        firstDayOfWeek != null ? { firstDayOfWeek } : undefined,
      ),
    ),
  );
}

describe('Calendar', () => {
  it('supports uncontrolled selection and expansion', () => {
    const { container } = render(
      <Calendar
        data={buildData()}
        defaultValue={{ kind: 'day', key: '2026-03-10' }}
        defaultExpanded={false}
      />,
    );

    const toggleButton = container.querySelector('button[data-expanded]')!;
    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute('data-expanded', 'true');

    const dayButtons = screen.getAllByRole('button', { name: '11' });
    const dayButton = dayButtons.find((btn) => btn.hasAttribute('data-outside'));
    fireEvent.click(dayButton!);
    expect(dayButton).toHaveAttribute('data-selected', 'true');
  });

  it('keeps collapsed expandable zones mounted for animation', () => {
    const { container } = render(
      <Calendar
        data={buildData()}
        defaultValue={{ kind: 'day', key: '2026-03-10' }}
        defaultExpanded={false}
      />,
    );

    const collapsedZones = container.querySelectorAll(
      '[data-expanded="false"]',
    );

    expect(collapsedZones.length).toBeGreaterThan(0);
    expect(collapsedZones[0]).toHaveAttribute('aria-hidden', 'true');
  });

  it('emits controlled value changes', () => {
    const onValueChange = vi.fn();

    const { container } = render(
      <Calendar
        data={buildData()}
        value={{ kind: 'day', key: '2026-03-10' }}
        onValueChange={onValueChange}
        expanded
      />,
    );

    const monthButton = container.querySelector('section > button');

    expect(monthButton).not.toBeNull();
    fireEvent.click(monthButton as HTMLButtonElement);

    expect(onValueChange).toHaveBeenCalledWith({
      kind: 'month',
      key: '2026-03',
    });
  });

  it('renders Sunday-start weekday labels when firstDayOfWeek is 0', () => {
    const { container } = render(
      <Calendar
        data={buildData(0)}
        defaultValue={{ kind: 'day', key: '2026-03-10' }}
        expanded
        customization={{ firstDayOfWeek: 0 }}
      />,
    );

    // WeekdayHeader: <div><span>#</span><span>S</span><span>M</span>...
    // Skip the first child (#) and collect day name spans
    const headerDiv = container.querySelector('section > div');
    const dayNameSpans = Array.from(headerDiv?.children ?? []).slice(1, 8);
    const labels = dayNameSpans.map((el) => el.textContent);
    expect(labels).toEqual(['S', 'M', 'T', 'W', 'T', 'F', 'S']);
  });
});
