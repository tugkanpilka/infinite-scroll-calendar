import type { ReactNode } from 'react';
import * as styles from './styles.module.scss';

interface Props {
  label: ReactNode;
  className?: string;
  selected: boolean;
  isActive: boolean;
  indicator?: false | 'primary' | 'secondary';
  onSelect?: () => void;
}

export default function Month(props: Props) {
  const { label, className, selected, isActive, indicator, onSelect } = props;

  return (
    <button
      type="button"
      className={[styles.root, className].filter(Boolean).join(' ')}
      data-kind="month"
      data-selected={selected}
      data-active={isActive}
      onClick={onSelect}
    >
      <span className={styles.title}>{label}</span>
      {indicator && (
        <span className={styles.indicator} data-indicator={indicator} />
      )}
      <svg
        className={styles.chevron}
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 4l4 4-4 4" />
      </svg>
    </button>
  );
}
