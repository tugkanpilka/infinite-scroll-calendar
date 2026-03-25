import type { CalendarSection } from '../../../types';
interface Props {
    sections: CalendarSection[];
    expanded: boolean;
    onDaySelect?: (value: string) => void;
    onWeekSelect?: (value: string) => void;
    onMonthSelect?: (value: string) => void;
}
export default function Grid(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
