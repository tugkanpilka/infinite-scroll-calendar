import { useCallback, useMemo, useState } from 'react';

import type { CalendarProps, CalendarValue } from '../types';

interface ControllerResult {
  value: CalendarValue;
  setValue: (value: CalendarValue) => void;
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
}

export function useController(props: CalendarProps): ControllerResult {
  const {
    value: controlledValue,
    defaultValue,
    onValueChange,
    expanded: controlledExpanded,
    defaultExpanded = false,
    onExpandedChange,
  } = props;

  const [uncontrolledValue, setUncontrolledValue] = useState<CalendarValue>(
    defaultValue ?? { kind: 'month', key: '' },
  );
  const [uncontrolledExpanded, setUncontrolledExpanded] =
    useState(defaultExpanded);

  const value = controlledValue ?? uncontrolledValue;
  const expanded = controlledExpanded ?? uncontrolledExpanded;

  const setValue = useCallback(
    (nextValue: CalendarValue) => {
      if (controlledValue === undefined) {
        setUncontrolledValue(nextValue);
      }
      onValueChange?.(nextValue);
    },
    [controlledValue, onValueChange],
  );

  const setExpanded = useCallback(
    (nextExpanded: boolean) => {
      if (controlledExpanded === undefined) {
        setUncontrolledExpanded(nextExpanded);
      }
      onExpandedChange?.(nextExpanded);
    },
    [controlledExpanded, onExpandedChange],
  );

  return useMemo(
    () => ({
      value,
      setValue,
      expanded,
      setExpanded,
    }),
    [expanded, setExpanded, setValue, value],
  );
}
