import { isToday } from 'date-fns';

import { resolveIndicator } from '../domain/metadata';
import type {
  CalendarIndicator,
  CalendarMetadataMap,
  CalendarValue,
} from '../types';

interface BuildVisualStateParams {
  key: string;
  value: CalendarValue;
  selectionEnabled?: boolean;
  metadata?: CalendarMetadataMap;
  outside?: boolean;
  date?: Date;
}

export interface CalendarVisualState {
  indicator: CalendarIndicator;
  selected: boolean;
  today: boolean;
  past: boolean;
}

function stripTime(d: Date): number {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
}

export function buildVisualState(
  params: BuildVisualStateParams,
): CalendarVisualState {
  const {
    key,
    value,
    selectionEnabled = true,
    metadata,
    outside = false,
    date,
  } = params;
  const selected = selectionEnabled && value.key === key;
  const today = !!date && isToday(date);
  const past =
    !!date && !outside && !today && stripTime(date) < stripTime(new Date());
  const indicator = outside ? false : resolveIndicator(metadata?.[key]);

  return { indicator, selected, today, past };
}
