import type { Meta, StoryObj } from '@storybook/react-vite';
import Calendar from '../root';
declare const meta: Meta<typeof Calendar>;
export default meta;
type Story = StoryObj<typeof Calendar>;
/**
 * Default: zero paddings everywhere. The grid hits the container edges,
 * week/month hover backgrounds fit the cells exactly with no bleed.
 */
export declare const Defaults: Story;
/**
 * Cushioned preset — apply the previous "roomy" look in one place. Copy these
 * tokens to your consumer stylesheet to get a calendar that breathes.
 */
export declare const CushionedPreset: Story;
/**
 * Wide gutters — the calendar lives in a card with its own large padding,
 * and you want extra breathing room without changing cell size.
 */
export declare const RoomyContainer: Story;
/**
 * Opt back into a narrow week-number column. By default the week column shares
 * its width with day columns (1fr each) so selection backgrounds stay
 * symmetric; override `--isc-week-col-width` with a fixed px value when you
 * want the week marker to take less room.
 */
export declare const NarrowWeekColumn: Story;
/**
 * Indicator dots positioned **inside** the cell box instead of bleeding below
 * it. Useful when the consumer container has `overflow: hidden` or row gaps.
 */
export declare const IndicatorsInsideCells: Story;
/**
 * Calendar embedded in a strict-width column (e.g. a sidebar). Cell sizing
 * tokens shrink the grid to fit. Default zero padding keeps the grid flush
 * with the sidebar's own padding.
 */
export declare const NarrowSidebar: Story;
/**
 * Week and month selection backgrounds at default — they fit each cell exactly
 * with no extra padding. Compare with `CushionedPreset` to see the bleed.
 */
export declare const SelectionTightFit: Story;
