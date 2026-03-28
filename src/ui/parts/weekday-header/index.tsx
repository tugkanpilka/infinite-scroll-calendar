import type { ReactNode } from 'react';

import * as styles from './styles.module.scss';

import DayName from '../day-name';
import { getWeekdayLabels } from '../../weekday-labels';

interface Props {
  labels?: ReactNode[];
  scrolled?: boolean;
  className?: string;
  dayNameClassName?: string;
}

export default function WeekdayHeader(props: Props) {
  const { labels = getWeekdayLabels(), scrolled, className, dayNameClassName } = props;

  return (
    <div className={[styles.root, className].filter(Boolean).join(' ')}>
      <span className={styles.weekNumberMarker}>#</span>
      {labels.map((label, index) => (
        <DayName
          key={`weekday-${index}`}
          label={label}
          className={dayNameClassName}
        />
      ))}
      <div className={styles.border} data-visible={!!scrolled} />
    </div>
  );
}
