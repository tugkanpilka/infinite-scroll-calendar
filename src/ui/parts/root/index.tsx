import { useEffect, useRef } from 'react';
import * as styles from './styles.module.scss';

import type { CalendarPureProps } from '../../../types';
import Grid from '../grid';

export default function Root(props: CalendarPureProps) {
  const {
    model,
    activeMonthKey,
    monthSelected,
    scrolled,
    onDaySelect,
    onWeekSelect,
    onMonthSelect,
    onExpandedChange,
    customization,
    style,
  } = props;

  const rootRef = useRef<HTMLDivElement>(null);
  const prevExpandedRef = useRef(model.expanded);

  useEffect(() => {
    const changed = prevExpandedRef.current !== model.expanded;
    prevExpandedRef.current = model.expanded;

    if (!changed) return;

    if (!model.expanded) {
      // Collapse: instantly reset scroll so the shrinking animation looks clean
      if (rootRef.current) rootRef.current.scrollTop = 0;
      return;
    }

    const timer = setTimeout(() => {
      const selected = rootRef.current?.querySelector('[data-selected="true"]');
      selected?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300);

    return () => clearTimeout(timer);
  }, [model.expanded]);

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
      ref={rootRef}
      className={[styles.root, customization?.classNames?.root]
        .filter(Boolean)
        .join(' ')}
      style={style}
    >
      <Grid
        sections={model.sections}
        expanded={!!model.expanded}
        monthSelected={monthSelected}
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
            data-expanded={!!model.expanded}
            onClick={() => onExpandedChange(!model.expanded)}
          >
            {toggleLabel}
          </button>
        )
      )}
    </div>
  );
}
