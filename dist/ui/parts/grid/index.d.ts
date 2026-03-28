import type { CalendarCustomization, CalendarSection } from '../../../types';
interface Props {
    sections: CalendarSection[];
    expanded: boolean;
    monthSelected?: boolean;
    activeMonthKey?: string;
    scrolled?: boolean;
    onDaySelect?: (value: string) => void;
    onWeekSelect?: (value: string) => void;
    onMonthSelect?: (value: string) => void;
    customization?: CalendarCustomization;
}
export default function Grid(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
