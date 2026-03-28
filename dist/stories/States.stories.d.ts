import type { Meta, StoryObj } from '@storybook/react-vite';
import Calendar from '../root';
declare const meta: Meta<typeof Calendar>;
export default meta;
type Story = StoryObj<typeof Calendar>;
/** Collapsed by default — only the active week row is visible. Expand toggles. */
export declare const Collapsed: Story;
/**
 * The `scrolled` prop shows the sticky border under the weekday header.
 * In production this is driven by the scroll container sitting above the calendar.
 */
export declare const Scrolled: Story;
/** Selection is disabled — calendar is read-only, no hover/focus styles. */
export declare const SelectionDisabled: Story;
