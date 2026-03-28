import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import Calendar from '../root';
import { data, todayKey, thisWeekKey, thisMonthKey } from './_helpers';

const meta: Meta<typeof Calendar> = {
  title: 'Calendar/Selection',
  component: Calendar,
  args: {
    data,
    defaultExpanded: true,
    selectionEnabled: true,
    onValueChange: fn(),
    onExpandedChange: fn(),
  },
  argTypes: {
    scrolled: { control: 'boolean' },
    defaultExpanded: { control: 'boolean' },
    selectionEnabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

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
