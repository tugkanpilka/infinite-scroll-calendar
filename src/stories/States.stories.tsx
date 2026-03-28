import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import Calendar from '../root';
import { data, todayKey } from './_helpers';

const meta: Meta<typeof Calendar> = {
  title: 'Calendar/States',
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

/** Collapsed by default — only the active week row is visible. Expand toggles. */
export const Collapsed: Story = {
  name: 'Collapsed',
  args: {
    defaultValue: { kind: 'day', key: todayKey() },
    defaultExpanded: false,
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

/** Selection is disabled — calendar is read-only, no hover/focus styles. */
export const SelectionDisabled: Story = {
  name: 'Selection Disabled',
  args: {
    defaultValue: { kind: 'day', key: todayKey() },
    selectionEnabled: false,
  },
};
