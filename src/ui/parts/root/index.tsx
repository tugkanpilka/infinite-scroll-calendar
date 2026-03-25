import * as styles from './styles.module.scss';

import type { CalendarPureProps } from '../../../types';
import Grid from '../grid';

export default function Root(props: CalendarPureProps) {
  const { model, onDaySelect, onWeekSelect, onMonthSelect, onExpandedChange } =
    props;

  return (
    <div className={styles.root}>
      <Grid
        sections={model.sections}
        expanded={!!model.expanded}
        onDaySelect={onDaySelect}
        onWeekSelect={onWeekSelect}
        onMonthSelect={onMonthSelect}
      />
      {onExpandedChange && (
        <button
          type="button"
          className={styles.toggle}
          onClick={() => onExpandedChange(!model.expanded)}
        >
          {model.expanded ? 'Collapse' : 'Expand'}
        </button>
      )}
    </div>
  );
}
