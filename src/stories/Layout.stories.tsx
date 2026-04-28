import type { Meta, StoryObj } from '@storybook/react-vite';
import type { CSSProperties } from 'react';
import { fn } from 'storybook/test';

import Calendar from '../root';
import { data, todayKey, thisWeekKey, makeIndicators } from './_helpers';

const meta: Meta<typeof Calendar> = {
  title: 'Calendar/Layout',
  component: Calendar,
  args: {
    data,
    defaultExpanded: true,
    selectionEnabled: true,
    onValueChange: fn(),
    onExpandedChange: fn(),
  },
  parameters: {
    docs: {
      description: {
        component:
          'Out of the box, the calendar has zero internal paddings — it sits flush with its container, and week/month selection backgrounds do not bleed past the cells. All spacing is exposed as CSS variables for consumers who want a roomier look.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

const tokenLegend = (entries: Array<[string, string]>) => (
  <ul style={{ margin: 0, paddingLeft: 16, fontSize: 11, color: '#888' }}>
    {entries.map(([k, v]) => (
      <li key={k}>
        <code>{k}</code>: <code>{v}</code>
      </li>
    ))}
  </ul>
);

/**
 * Default: zero paddings everywhere. The grid hits the container edges,
 * week/month hover backgrounds fit the cells exactly with no bleed.
 */
export const Defaults: Story = {
  name: 'Defaults — flush, no internal padding',
  args: {
    defaultValue: { kind: 'day', key: todayKey() },
    metadata: makeIndicators(8),
  },
};

/**
 * Cushioned preset — apply the previous "roomy" look in one place. Copy these
 * tokens to your consumer stylesheet to get a calendar that breathes.
 */
export const CushionedPreset: Story = {
  name: 'Cushioned preset (opt-in roomy look)',
  args: {
    defaultValue: { kind: 'day', key: todayKey() },
    metadata: makeIndicators(8),
    style: {
      '--isc-row-padding-x': '6px',
      '--isc-section-pad-top': '2px',
      '--isc-section-pad-bottom': '6px',
      '--isc-section-gap': '4px',
      '--isc-month-label-pad-y': '4px',
      '--isc-month-label-pad-end': '8px',
      '--isc-weekday-header-pad-bottom': '4px',
      '--isc-weekday-header-margin-bottom-collapsed': '-2px',
      '--isc-week-bleed-start': '4px',
      '--isc-week-bleed-end': '11px',
    } as CSSProperties,
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {tokenLegend([
        ['--isc-row-padding-x', '6px'],
        ['--isc-section-pad-top / bottom', '2px / 6px'],
        ['--isc-section-gap', '4px'],
        ['--isc-month-label-pad-y / end', '4px / 8px'],
        ['--isc-weekday-header-pad-bottom', '4px'],
        ['--isc-week-bleed-start / end', '4px / 11px'],
      ])}
      <Calendar {...args} />
    </div>
  ),
};

/**
 * Wide gutters — the calendar lives in a card with its own large padding,
 * and you want extra breathing room without changing cell size.
 */
export const RoomyContainer: Story = {
  name: 'Roomy container — large row padding & section gap',
  args: {
    defaultValue: { kind: 'day', key: todayKey() },
    metadata: makeIndicators(8),
    style: {
      '--isc-row-padding-x': '16px',
      '--isc-section-pad-top': '8px',
      '--isc-section-pad-bottom': '12px',
      '--isc-section-gap': '12px',
      '--isc-month-label-pad-y': '6px',
    } as CSSProperties,
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {tokenLegend([
        ['--isc-row-padding-x', '16px'],
        ['--isc-section-pad-top', '8px'],
        ['--isc-section-pad-bottom', '12px'],
        ['--isc-section-gap', '12px'],
      ])}
      <Calendar {...args} />
    </div>
  ),
};

/**
 * Opt back into a narrow week-number column. By default the week column shares
 * its width with day columns (1fr each) so selection backgrounds stay
 * symmetric; override `--isc-week-col-width` with a fixed px value when you
 * want the week marker to take less room.
 */
export const NarrowWeekColumn: Story = {
  name: 'Narrow week column (legacy 22px)',
  args: {
    defaultValue: { kind: 'week', key: thisWeekKey() },
    style: {
      '--isc-week-col-width': '22px',
      '--isc-month-label-offset':
        'calc(var(--isc-row-padding-x) + 22px)',
    } as CSSProperties,
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {tokenLegend([
        ['--isc-week-col-width', '22px'],
        [
          '--isc-month-label-offset',
          'calc(var(--isc-row-padding-x) + 22px)',
        ],
      ])}
      <Calendar {...args} />
    </div>
  ),
};

/**
 * Indicator dots positioned **inside** the cell box instead of bleeding below
 * it. Useful when the consumer container has `overflow: hidden` or row gaps.
 */
export const IndicatorsInsideCells: Story = {
  name: 'Indicators inside cells (no overflow bleed)',
  args: {
    defaultValue: { kind: 'day', key: todayKey() },
    metadata: makeIndicators(15),
    style: {
      '--isc-day-indicator-offset': '2px',
      '--isc-week-indicator-offset': '2px',
    } as CSSProperties,
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {tokenLegend([
        ['--isc-day-indicator-offset', '2px'],
        ['--isc-week-indicator-offset', '2px'],
      ])}
      <Calendar {...args} />
    </div>
  ),
};

/**
 * Calendar embedded in a strict-width column (e.g. a sidebar). Cell sizing
 * tokens shrink the grid to fit. Default zero padding keeps the grid flush
 * with the sidebar's own padding.
 */
export const NarrowSidebar: Story = {
  name: 'Narrow sidebar (220px)',
  args: {
    defaultValue: { kind: 'day', key: todayKey() },
    style: {
      '--isc-cell-size': '32px',
      '--isc-day-marker-size': '20px',
      '--isc-week-col-width': '18px',
    } as CSSProperties,
  },
  render: (args) => (
    <div
      style={{
        width: 220,
        border: '1px dashed rgba(0,0,0,0.15)',
        borderRadius: 8,
        padding: 8,
      }}
    >
      <Calendar {...args} />
    </div>
  ),
};

/**
 * Week and month selection backgrounds at default — they fit each cell exactly
 * with no extra padding. Compare with `CushionedPreset` to see the bleed.
 */
export const SelectionTightFit: Story = {
  name: 'Selection backgrounds — no bleed',
  args: {
    defaultValue: { kind: 'week', key: thisWeekKey() },
    metadata: makeIndicators(15),
  },
};
