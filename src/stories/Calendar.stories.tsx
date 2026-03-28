import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  addWeekNumbers,
  buildRange,
  fillAdjacentDays,
  groupByMonth,
  splitRows,
} from 'date-grid';

import Calendar from '../root';

// ---------------------------------------------------------------------------
// Data helpers
// ---------------------------------------------------------------------------

function buildData(monthsBack = 1, monthsAhead = 2) {
  const today = new Date();
  const start = new Date(today.getFullYear(), today.getMonth() - monthsBack, 1);
  const end = new Date(
    today.getFullYear(),
    today.getMonth() + monthsAhead + 1,
    0,
  );
  return addWeekNumbers(
    splitRows(fillAdjacentDays(groupByMonth(buildRange({ start, end })))),
  );
}

// Pre-built so all stories share the same data reference
const data = buildData();

// Today's date formatted as YYYY-MM-DD for value props
function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

function thisMonthKey(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}

// Current ISO week key — e.g. "2026-W13"
function thisWeekKey(): string {
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

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------

const meta: Meta<typeof Calendar> = {
  title: 'Calendar',
  component: Calendar,
  args: {
    data,
    expanded: true,
    selectionEnabled: true,
  },
  argTypes: {
    scrolled: { control: 'boolean' },
    expanded: { control: 'boolean' },
    selectionEnabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

// ---------------------------------------------------------------------------
// Stories
// ---------------------------------------------------------------------------

/** Default: day selected = today */
export const DaySelected: Story = {
  name: 'Day Selected',
  args: {
    value: { kind: 'day', key: todayKey() },
  },
};

/** Week row is highlighted */
export const WeekSelected: Story = {
  name: 'Week Selected',
  args: {
    value: { kind: 'week', key: thisWeekKey() },
  },
};

/** Entire month section gets the selected-month background */
export const MonthSelected: Story = {
  name: 'Month Selected',
  args: {
    value: { kind: 'month', key: thisMonthKey() },
  },
};

/** Collapsed by default — only the active week row is visible */
export const Collapsed: Story = {
  name: 'Collapsed',
  args: {
    value: { kind: 'day', key: todayKey() },
    defaultExpanded: false,
    expanded: undefined,
  },
};

/**
 * The `scrolled` prop shows the sticky border under the weekday header.
 * In a real app this is driven by the scroll container above the calendar.
 */
export const Scrolled: Story = {
  name: 'Scrolled (border visible)',
  args: {
    value: { kind: 'day', key: todayKey() },
    scrolled: true,
  },
};

/**
 * Metadata drives the indicator dots under day cells.
 * `"primary"` = solid dot, `"secondary"` = faded dot.
 */
export const WithIndicators: Story = {
  name: 'With Indicators',
  args: {
    value: { kind: 'day', key: todayKey() },
    metadata: (() => {
      const map: Record<string, 'primary' | 'secondary'> = {};
      const base = new Date();
      for (let i = -10; i <= 10; i++) {
        const d = new Date(base);
        d.setDate(d.getDate() + i);
        const key = d.toISOString().slice(0, 10);
        map[key] = i % 3 === 0 ? 'primary' : 'secondary';
      }
      return map;
    })(),
  },
};

/** Selection is disabled — calendar renders as read-only indicator */
export const SelectionDisabled: Story = {
  name: 'Selection Disabled',
  args: {
    value: { kind: 'day', key: todayKey() },
    selectionEnabled: false,
  },
};

/** All states combined: indicators, scrolled, expanded */
export const AllFeatures: Story = {
  name: 'All Features',
  args: {
    value: { kind: 'day', key: todayKey() },
    scrolled: true,
    metadata: (() => {
      const map: Record<string, 'primary' | 'secondary'> = {};
      const base = new Date();
      for (let i = -15; i <= 15; i++) {
        const d = new Date(base);
        d.setDate(d.getDate() + i);
        map[d.toISOString().slice(0, 10)] =
          i % 2 === 0 ? 'primary' : 'secondary';
      }
      return map;
    })(),
  },
};
