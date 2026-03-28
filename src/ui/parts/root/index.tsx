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
    style,
  } = props;

  const ToggleSlot = customization?.slots?.toggle;
  const toggleLabel =
    customization?.formatters?.toggleLabel?.(!!model.expanded) ?? (
      <svg
        viewBox="0 0 16 16"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={model.expanded ? 'M4 10l4-4 4 4' : 'M4 6l4 4 4-4'} />
      </svg>
    );

  return (
    <div
      className={[styles.root, customization?.classNames?.root]
        .filter(Boolean)
        .join(' ')}
      style={style}
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
