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
