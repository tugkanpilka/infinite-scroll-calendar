import type { ReactNode } from 'react';
import * as styles from './styles.module.scss';

interface Props {
  label: ReactNode;
  className?: string;
  selected: boolean;
  indicator?: false | 'primary' | 'secondary';
  onSelect?: () => void;
}

export default function Month(props: Props) {
  const { label, className, selected, indicator, onSelect } = props;

  return (
    <button
      type="button"
      className={[styles.root, className].filter(Boolean).join(' ')}
      data-selected={selected}
      onClick={onSelect}
    >
      {label}
      {indicator && (
        <span className={styles.indicator} data-indicator={indicator} />
      )}
    </button>
  );
}
