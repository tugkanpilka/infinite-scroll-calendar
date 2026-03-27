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

function buildData() {
  return addWeekNumbers(
    splitRows(
      fillAdjacentDays(
        groupByMonth(
          buildRange({
            start: new Date('2026-03-01T00:00:00.000Z'),
            end: new Date('2026-03-31T00:00:00.000Z'),
          }),
        ),
      ),
    ),
  );
}

describe('Calendar', () => {
  it('supports uncontrolled selection and expansion', () => {
    render(
      <Calendar
        data={buildData()}
        defaultValue={{ kind: 'day', key: '2026-03-10' }}
        defaultExpanded={false}
      />,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Expand' }));
    expect(
      screen.getByRole('button', { name: 'Collapse' }),
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: '11' }));
    expect(screen.getAllByRole('button', { name: '11' })[0]).toHaveAttribute(
      'data-selected',
      'true',
    );
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
});
