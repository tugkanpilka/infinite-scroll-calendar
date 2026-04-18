import * as styles from './styles.module.scss';

import type {
  CalendarCustomization,
  CalendarDayItem,
  CalendarItem,
  CalendarSection,
  CalendarWeekItem,
} from '../../../types';
import ExpandableZone from '../expandable-zone';
import Day from '../day';
import Month from '../month';
import Week from '../week';
import WeekdayHeader from '../weekday-header';
import { getWeekdayLabels } from '../../weekday-labels';

interface Props {
  sections: CalendarSection[];
  expanded: boolean;
  monthSelected?: boolean;
  activeMonthKey?: string;
  scrolled?: boolean;
  onDaySelect?: (value: string) => void;
  onWeekSelect?: (value: string) => void;
  onMonthSelect?: (value: string) => void;
  customization?: CalendarCustomization;
}

function joinClassNames(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(' ') || undefined;
}

function renderItem(
  item: CalendarItem,
  customization?: CalendarCustomization,
  onDaySelect?: (value: string) => void,
  onWeekSelect?: (value: string) => void,
) {
  if (item.kind === 'week') {
    const weekItem = item as CalendarWeekItem;
    const label =
      customization?.formatters?.weekLabel?.(weekItem) ?? weekItem.label;
    const WeekSlot = customization?.slots?.week;

    if (WeekSlot) {
      return (
        <WeekSlot
          key={weekItem.key}
          item={weekItem}
          label={label}
          className={customization?.classNames?.week}
          onSelect={() => onWeekSelect?.(weekItem.value)}
        />
      );
    }

    return (
      <Week
        key={weekItem.key}
        label={label}
        className={customization?.classNames?.week}
        selected={weekItem.selected}
        indicator={weekItem.indicator}
        onSelect={() => onWeekSelect?.(weekItem.value)}
      />
    );
  }

  const dayItem = item as CalendarDayItem;
  const label = customization?.formatters?.dayLabel?.(dayItem) ?? dayItem.label;
  const DaySlot = customization?.slots?.day;

  if (DaySlot) {
    return (
      <DaySlot
        key={dayItem.key}
        item={dayItem}
        label={label}
        className={customization?.classNames?.day}
        onSelect={() => onDaySelect?.(dayItem.value)}
      />
    );
  }

  return (
    <Day
      key={dayItem.key}
      label={label}
      className={customization?.classNames?.day}
      selected={dayItem.selected}
      today={dayItem.today}
      past={dayItem.past}
      outside={dayItem.outside}
      indicator={dayItem.indicator}
      onSelect={() => onDaySelect?.(dayItem.value)}
    />
  );
}

function renderRows(
  rows: CalendarItem[][],
  customization?: CalendarCustomization,
  onDaySelect?: (value: string) => void,
  onWeekSelect?: (value: string) => void,
) {
  return rows.map((row, rowIndex) => (
    <div
      className={joinClassNames(styles.row, customization?.classNames?.row)}
      key={`row-${rowIndex}`}
    >
      {row.map((item) =>
        renderItem(item, customization, onDaySelect, onWeekSelect),
      )}
    </div>
  ));
}

export default function Grid(props: Props) {
  const {
    sections,
    expanded,
    monthSelected,
    activeMonthKey,
    scrolled,
    onDaySelect,
    onWeekSelect,
    onMonthSelect,
    customization,
  } = props;

  const weekdayLabels =
    customization?.weekdayLabels?.length
      ? customization.weekdayLabels
      : getWeekdayLabels(customization?.firstDayOfWeek);
  const WeekdayHeaderSlot = customization?.slots?.weekdayHeader;
  const DayNameSlot = customization?.slots?.dayName;
  const MonthSlot = customization?.slots?.month;
  const dayNameClassName = customization?.classNames?.dayName;

  return (
    <div className={joinClassNames(styles.root, customization?.classNames?.grid)}>
      {sections.map((section, sectionIndex) => {
        const isActive = section.monthValue === activeMonthKey;

        return (
          <ExpandableZone
            key={section.key}
            expanded={expanded || isActive}
            className={customization?.classNames?.expandableZone}
          >
            <section
              className={joinClassNames(
                styles.section,
                customization?.classNames?.section,
              )}
            >
              {(() => {
                const monthLabel =
                  customization?.formatters?.monthLabel?.(section) ??
                  section.monthLabel;
                return (
                  <Month
                    label={
                      MonthSlot ? (
                        <MonthSlot
                          section={section}
                          label={monthLabel}
                          isActive={isActive}
                          selected={section.selected}
                          indicator={section.indicator}
                        />
                      ) : (
                        monthLabel
                      )
                    }
                    className={customization?.classNames?.month}
                    selected={section.selected}
                    isActive={isActive}
                    indicator={section.indicator}
                    onSelect={() => onMonthSelect?.(section.monthValue)}
                  />
                );
              })()}
              {(!expanded || sectionIndex === 0) &&
                (WeekdayHeaderSlot ? (
                  <WeekdayHeaderSlot
                    labels={weekdayLabels.map((label, index) =>
                      DayNameSlot ? (
                        <DayNameSlot
                          key={`weekday-${index}`}
                          index={index}
                          label={label}
                          className={dayNameClassName}
                        />
                      ) : (
                        label
                      ),
                    )}
                    scrolled={scrolled}
                    expanded={expanded}
                    className={customization?.classNames?.weekdayHeader}
                    dayNameClassName={dayNameClassName}
                  />
                ) : (
                  <WeekdayHeader
                    labels={weekdayLabels}
                    scrolled={scrolled}
                    expanded={expanded}
                    className={customization?.classNames?.weekdayHeader}
                    dayNameClassName={dayNameClassName}
                  />
                ))}
              <ExpandableZone
                expanded={expanded || (isActive && !!monthSelected)}
                className={customization?.classNames?.expandableZone}
              >
                {renderRows(section.beforeRows, customization, onDaySelect, onWeekSelect)}
              </ExpandableZone>
              {renderRows(section.activeRows, customization, onDaySelect, onWeekSelect)}
              <ExpandableZone
                expanded={expanded || (isActive && !!monthSelected)}
                className={customization?.classNames?.expandableZone}
              >
                {renderRows(section.afterRows, customization, onDaySelect, onWeekSelect)}
              </ExpandableZone>
            </section>
          </ExpandableZone>
        );
      })}
    </div>
  );
}
