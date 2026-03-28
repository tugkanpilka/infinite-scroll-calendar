import type { Meta, StoryObj } from '@storybook/react-vite';
import Calendar from '../root';
declare const meta: Meta<typeof Calendar>;
export default meta;
type Story = StoryObj<typeof Calendar>;
/**
 * Uncontrolled — selection updates on click, actions log in the panel.
 * Uses `defaultValue` so the Calendar manages its own state internally.
 */
export declare const DaySelected: Story;
export declare const WeekSelected: Story;
export declare const MonthSelected: Story;
/** Collapsed by default — only the active week row is visible. Expand toggles. */
export declare const Collapsed: Story;
/**
 * The `scrolled` prop shows the sticky border under the weekday header.
 * In production this is driven by the scroll container sitting above the calendar.
 */
export declare const Scrolled: Story;
/**
 * Indicator dots appear below day cells.
 * `"primary"` = solid accent dot, `"secondary"` = faded dot.
 */
export declare const WithIndicators: Story;
/** Selection is disabled — calendar is read-only, no hover/focus styles. */
export declare const SelectionDisabled: Story;
/** All features active at once. */
export declare const AllFeatures: Story;
