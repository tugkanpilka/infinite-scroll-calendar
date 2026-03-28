import type { ReactNode } from 'react';
import * as styles from './styles.module.scss';

interface Props {
  label: ReactNode;
  className?: string;
}

export default function DayName({ label, className }: Props) {
  return (
    <span className={[styles.root, className].filter(Boolean).join(' ')}>
      {label}
    </span>
  );
}
