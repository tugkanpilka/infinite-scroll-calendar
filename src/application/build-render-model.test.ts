import { describe, expect, it } from 'vitest';
import {
  addWeekNumbers,
  buildRange,
  fillAdjacentDays,
  groupByMonth,
  splitRows,
} from '@docbook/date-grid';

import { buildRenderModel } from './build-render-model';

describe('buildRenderModel', () => {
  it('builds section rows with week markers and selected day state', () => {
    const data = addWeekNumbers(
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

    const model = buildRenderModel({
      data,
      value: { kind: 'day', key: '2026-03-10' },
      metadata: {
        '2026-03-10': { hasContent: true, hasUncompletedTodo: true },
      },
      expanded: false,
    });

    expect(model.sections[0].monthLabel).toBe('March');
    expect(
      model.sections[0].activeRows[0].some(
        (item) => item.value === '2026-03-10',
      ),
    ).toBe(true);
    expect(
      model.sections[0].activeRows[0].find(
        (item) => item.value === '2026-03-10',
      ),
    ).toMatchObject({
      kind: 'day',
      selected: true,
      indicator: 'primary',
    });
  });
});
