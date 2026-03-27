import type { ReactNode } from 'react';
import * as styles from './styles.module.scss';

interface Props {
  label: ReactNode;
  className?: string;
  selected: boolean;
  today: boolean;
  outside: boolean;
  indicator?: false | 'primary' | 'secondary';
  onSelect?: () => void;
}

export default function Day(props: Props) {
  const { label, className, selected, today, outside, indicator, onSelect } =
    props;

  return (
    <button
      type="button"
      className={[styles.root, className].filter(Boolean).join(' ')}
      data-selected={selected}
      data-today={today}
      data-outside={outside}
      onClick={onSelect}
    >
      {label}
      {indicator && (
        <span className={styles.indicator} data-indicator={indicator} />
      )}
    </button>
  );
}
