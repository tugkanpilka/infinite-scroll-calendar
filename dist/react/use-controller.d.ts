import type { CalendarProps, CalendarValue } from '../types';
interface ControllerResult {
    value: CalendarValue;
    setValue: (value: CalendarValue) => void;
    expanded: boolean;
    setExpanded: (expanded: boolean) => void;
}
export declare function useController(props: CalendarProps): ControllerResult;
export {};
