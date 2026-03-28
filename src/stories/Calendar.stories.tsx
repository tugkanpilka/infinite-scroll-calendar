import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from '@storybook/test';
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

const data = buildData();

function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

function thisMonthKey(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}

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

function makeIndicators(range: number): Record<string, 'primary' | 'secondary'> {
  const map: Record<string, 'primary' | 'secondary'> = {};
  const base = new Date();
  for (let i = -range; i <= range; i++) {
    const d = new Date(base);
    d.setDate(d.getDate() + i);
    map[d.toISOString().slice(0, 10)] = i % 3 === 0 ? 'primary' : 'secondary';
  }
  return map;
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
    // Wire onValueChange to Storybook's Actions panel
    onValueChange: fn(),
    onExpandedChange: fn(),
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

/**
 * Uncontrolled — selection updates on click, actions log in the panel.
 * Uses `defaultValue` so the Calendar manages its own state internally.
 */
export const DaySelected: Story = {
  name: 'Day Selected',
  args: {
    defaultValue: { kind: 'day', key: todayKey() },
  },
};

export const WeekSelected: Story = {
  name: 'Week Selected',
  args: {
    defaultValue: { kind: 'week', key: thisWeekKey() },
  },
};

export const MonthSelected: Story = {
  name: 'Month Selected',
  args: {
    defaultValue: { kind: 'month', key: thisMonthKey() },
  },
};

/** Collapsed by default — only the active week row is visible. Expand toggles. */
export const Collapsed: Story = {
  name: 'Collapsed',
  args: {
    defaultValue: { kind: 'day', key: todayKey() },
    defaultExpanded: false,
    expanded: undefined,
  },
};

/**
 * The `scrolled` prop shows the sticky border under the weekday header.
 * In production this is driven by the scroll container sitting above the calendar.
 */
export const Scrolled: Story = {
  name: 'Scrolled (border visible)',
  args: {
    defaultValue: { kind: 'day', key: todayKey() },
    scrolled: true,
  },
};

/**
 * Indicator dots appear below day cells.
 * `"primary"` = solid accent dot, `"secondary"` = faded dot.
 */
export const WithIndicators: Story = {
  name: 'With Indicators',
  args: {
    defaultValue: { kind: 'day', key: todayKey() },
    metadata: makeIndicators(10),
  },
};

/** Selection is disabled — calendar is read-only, no hover/focus styles. */
export const SelectionDisabled: Story = {
  name: 'Selection Disabled',
  args: {
    defaultValue: { kind: 'day', key: todayKey() },
    selectionEnabled: false,
  },
};

/** All features active at once. */
export const AllFeatures: Story = {
  name: 'All Features',
  args: {
    defaultValue: { kind: 'day', key: todayKey() },
    scrolled: true,
    metadata: makeIndicators(15),
  },
};
