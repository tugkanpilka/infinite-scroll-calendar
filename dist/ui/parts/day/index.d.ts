import type { ReactNode } from 'react';
interface Props {
    label: ReactNode;
    className?: string;
    selected: boolean;
    today: boolean;
    outside: boolean;
    indicator?: false | 'primary' | 'secondary';
    onSelect?: () => void;
}
export default function Day(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
