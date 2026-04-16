import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import Calendar from '../root';
import type { CalendarMonthSlotProps } from '../types';
import { data, todayKey } from './_helpers';

const meta: Meta<typeof Calendar> = {
  title: 'Calendar/Slots',
  component: Calendar,
  args: {
    data,
    defaultExpanded: true,
    selectionEnabled: true,
    onValueChange: fn(),
    onExpandedChange: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

function CustomMonthHeader({
  label,
  isActive,
  selected,
}: CalendarMonthSlotProps) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        fontWeight: selected || isActive ? 700 : 500,
        letterSpacing: '0.02em',
        textTransform: 'uppercase',
        color: selected ? '#e74c3c' : 'inherit',
      }}
    >
      <span aria-hidden>✦</span>
      {label}
    </span>
  );
}

/**
 * Custom month header via the `month` slot. The slot returns inline content
 * only — Calendar still wraps it in the built-in button, so the row background
 * highlight, chevron rotation, and expand/collapse animations keep working.
 */
export const CustomMonthHeaderSlot: Story = {
  name: 'Custom Month Header',
  args: {
    defaultValue: { kind: 'month', key: todayKey().slice(0, 7) },
    customization: {
      slots: { month: CustomMonthHeader },
    },
  },
};
