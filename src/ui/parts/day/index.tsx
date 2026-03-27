import type { ReactNode } from 'react';
import * as styles from './styles.module.scss';

interface Props {
  label: ReactNode;
  className?: string;
  selected: boolean;
  today: boolean;
  past: boolean;
  outside: boolean;
  indicator?: false | 'primary' | 'secondary';
  onSelect?: () => void;
}

export default function Day(props: Props) {
  const { label, className, selected, today, past, outside, indicator, onSelect } =
    props;
  const handleClick = outside ? undefined : onSelect;

  return (
    <button
      type="button"
      className={[styles.cell, className].filter(Boolean).join(' ')}
      data-selected={selected}
      data-today={today}
      data-outside={outside}
      data-past={past}
      aria-disabled={outside || undefined}
      tabIndex={outside ? -1 : undefined}
      onClick={handleClick}
    >
      <span
        className={styles.marker}
        data-selected={selected}
        data-today={today}
        data-past={past}
      >
        <span className={styles.label}>{label}</span>
        {indicator && (
          <span className={styles.indicator} data-indicator={indicator} />
        )}
      </span>
    </button>
  );
}
