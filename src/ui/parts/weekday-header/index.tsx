import * as styles from './styles.module.scss';

import DayName from '../day-name';

const LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function WeekdayHeader() {
  return (
    <div className={styles.root}>
      <span />
      {LABELS.map((label) => (
        <DayName key={label} label={label} />
      ))}
    </div>
  );
}
