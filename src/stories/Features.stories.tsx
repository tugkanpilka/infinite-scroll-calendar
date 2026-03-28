import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import Calendar from '../root';
import { buildData, data, todayKey, makeIndicators } from './_helpers';

const meta: Meta<typeof Calendar> = {
  title: 'Calendar/Features',
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

/** All features active at once. */
export const AllFeatures: Story = {
  name: 'All Features',
  args: {
    defaultValue: { kind: 'day', key: todayKey() },
    scrolled: true,
    metadata: makeIndicators(15),
  },
};

/** Weeks start on Sunday (US, Canada, Japan, etc.). */
export const SundayStart: Story = {
  name: 'Sunday Start (firstDayOfWeek: 0)',
  args: {
    data: buildData(12, 12, 0),
    defaultValue: { kind: 'day', key: todayKey() },
    customization: { firstDayOfWeek: 0 },
  },
};

/** Weeks start on Saturday (parts of Middle East, North Africa). */
export const SaturdayStart: Story = {
  name: 'Saturday Start (firstDayOfWeek: 6)',
  args: {
    data: buildData(12, 12, 6),
    defaultValue: { kind: 'day', key: todayKey() },
    customization: { firstDayOfWeek: 6 },
  },
};
