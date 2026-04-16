import type { Meta, StoryObj } from '@storybook/react-vite';
import Calendar from '../root';
declare const meta: Meta<typeof Calendar>;
export default meta;
type Story = StoryObj<typeof Calendar>;
/**
 * Custom month header via the `month` slot. The slot returns inline content
 * only — Calendar still wraps it in the built-in button, so the row background
 * highlight, chevron rotation, and expand/collapse animations keep working.
 */
export declare const CustomMonthHeaderSlot: Story;
