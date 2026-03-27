import * as styles from './styles.module.scss';

import type { CalendarPureProps } from '../../../types';
import Grid from '../grid';

export default function Root(props: CalendarPureProps) {
  const {
    model,
    activeMonthKey,
    scrolled,
    onDaySelect,
    onWeekSelect,
    onMonthSelect,
    onExpandedChange,
    customization,
  } = props;

  const ToggleSlot = customization?.slots?.toggle;
  const toggleLabel =
    customization?.formatters?.toggleLabel?.(!!model.expanded) ??
    (model.expanded ? 'Collapse' : 'Expand');

  return (
    <div
      className={[styles.root, customization?.classNames?.root]
        .filter(Boolean)
        .join(' ')}
    >
      <Grid
        sections={model.sections}
        expanded={!!model.expanded}
        activeMonthKey={activeMonthKey}
        scrolled={scrolled}
        onDaySelect={onDaySelect}
        onWeekSelect={onWeekSelect}
        onMonthSelect={onMonthSelect}
        customization={customization}
      />
      {onExpandedChange && (
        ToggleSlot ? (
          <ToggleSlot
            expanded={!!model.expanded}
            label={toggleLabel}
            className={[styles.toggle, customization?.classNames?.toggle]
              .filter(Boolean)
              .join(' ')}
            onToggle={() => onExpandedChange(!model.expanded)}
          />
        ) : (
          <button
            type="button"
            className={[styles.toggle, customization?.classNames?.toggle]
              .filter(Boolean)
              .join(' ')}
            onClick={() => onExpandedChange(!model.expanded)}
          >
            {toggleLabel}
          </button>
        )
      )}
    </div>
  );
}
