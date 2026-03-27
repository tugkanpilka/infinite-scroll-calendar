import type { ReactNode } from 'react';
interface Props {
    label: ReactNode;
    className?: string;
    selected: boolean;
    indicator?: false | 'primary' | 'secondary';
    onSelect?: () => void;
}
export default function Month(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
