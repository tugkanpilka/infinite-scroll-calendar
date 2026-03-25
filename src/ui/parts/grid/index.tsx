import * as styles from './styles.module.scss';

import type { CalendarItem, CalendarSection } from '../../../types';
import ExpandableZone from '../expandable-zone';
import Day from '../day';
import Month from '../month';
import Week from '../week';
import WeekdayHeader from '../weekday-header';

interface Props {
  sections: CalendarSection[];
  expanded: boolean;
  onDaySelect?: (value: string) => void;
  onWeekSelect?: (value: string) => void;
  onMonthSelect?: (value: string) => void;
}

function renderItem(
  item: CalendarItem,
  onDaySelect?: (value: string) => void,
  onWeekSelect?: (value: string) => void,
) {
  if (item.kind === 'week') {
    return (
      <Week
        key={item.key}
        label={item.label}
        selected={item.selected}
        onSelect={() => onWeekSelect?.(item.value)}
      />
    );
  }

  return (
    <Day
      key={item.key}
      label={item.label}
      selected={item.selected}
      today={item.today}
      outside={item.outside}
      onSelect={() => onDaySelect?.(item.value)}
    />
  );
}

function renderRows(
  rows: CalendarItem[][],
  onDaySelect?: (value: string) => void,
  onWeekSelect?: (value: string) => void,
) {
  return rows.map((row, rowIndex) => (
    <div className={styles.row} key={`row-${rowIndex}`}>
      {row.map((item) => renderItem(item, onDaySelect, onWeekSelect))}
    </div>
  ));
}

export default function Grid(props: Props) {
  const { sections, expanded, onDaySelect, onWeekSelect, onMonthSelect } =
    props;

  return (
    <div className={styles.root}>
      {sections.map((section) => (
        <section key={section.key} className={styles.section}>
          <Month
            label={section.monthLabel}
            selected={section.selected}
            onSelect={() => onMonthSelect?.(section.monthValue)}
          />
          <WeekdayHeader />
          <ExpandableZone expanded={expanded}>
            {renderRows(section.beforeRows, onDaySelect, onWeekSelect)}
          </ExpandableZone>
          {renderRows(section.activeRows, onDaySelect, onWeekSelect)}
          <ExpandableZone expanded={expanded}>
            {renderRows(section.afterRows, onDaySelect, onWeekSelect)}
          </ExpandableZone>
        </section>
      ))}
    </div>
  );
}
