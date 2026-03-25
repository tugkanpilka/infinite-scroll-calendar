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
  metadata?: CalendarMetadataMap;
  outside?: boolean;
  date?: Date;
}

export interface CalendarVisualState {
  indicator: CalendarIndicator;
  selected: boolean;
  today: boolean;
}

export function buildVisualState(
  params: BuildVisualStateParams,
): CalendarVisualState {
  const { key, value, metadata, outside = false, date } = params;
  const selected = value.key === key;
  const today = !!date && isToday(date);
  const indicator = outside ? false : resolveIndicator(metadata?.[key]);

  return { indicator, selected, today };
}
