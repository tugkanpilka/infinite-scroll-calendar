import type { ReactNode } from 'react';

import * as styles from './styles.module.scss';

import DayName from '../day-name';

const LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

interface Props {
  labels?: ReactNode[];
  className?: string;
  dayNameClassName?: string;
}

export default function WeekdayHeader(props: Props) {
  const { labels = LABELS, className, dayNameClassName } = props;

  return (
    <div className={[styles.root, className].filter(Boolean).join(' ')}>
      <span />
      {labels.map((label, index) => (
        <DayName
          key={`weekday-${index}`}
          label={label}
          className={dayNameClassName}
        />
      ))}
    </div>
  );
}
