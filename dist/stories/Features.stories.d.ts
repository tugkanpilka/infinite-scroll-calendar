import type { Meta, StoryObj } from '@storybook/react-vite';
import Calendar from '../root';
declare const meta: Meta<typeof Calendar>;
export default meta;
type Story = StoryObj<typeof Calendar>;
/**
 * Indicator dots appear below day cells.
 * `"primary"` = solid accent dot, `"secondary"` = faded dot.
 */
export declare const WithIndicators: Story;
/** All features active at once. */
export declare const AllFeatures: Story;
/** Weeks start on Sunday (US, Canada, Japan, etc.). */
export declare const SundayStart: Story;
/** Weeks start on Saturday (parts of Middle East, North Africa). */
export declare const SaturdayStart: Story;
