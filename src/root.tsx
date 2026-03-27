import { useMemo } from 'react';

import { buildRenderModel } from './application/build-render-model';
import { useController } from './react/use-controller';
import type { CalendarProps } from './types';
import CalendarPure from './pure';

export default function Calendar(props: CalendarProps) {
  const controller = useController(props);
  const { customization, data, metadata, selectionEnabled = true } = props;
  const { expanded, setExpanded, setValue, value } = controller;

  const model = useMemo(
    () =>
      buildRenderModel({
        data,
        value,
        selectionEnabled,
        metadata,
        expanded,
      }),
    [customization, data, expanded, metadata, selectionEnabled, value],
  );

  return (
    <CalendarPure
      model={model}
      onDaySelect={(nextValue) => setValue({ kind: 'day', key: nextValue })}
      onWeekSelect={(nextValue) => setValue({ kind: 'week', key: nextValue })}
      onMonthSelect={(nextValue) => setValue({ kind: 'month', key: nextValue })}
      onExpandedChange={setExpanded}
      customization={customization}
    />
  );
}
