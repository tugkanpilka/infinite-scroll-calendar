import type { CalendarIndicator, CalendarMetadata } from '../types';

export function resolveIndicator(
  metadata?: CalendarMetadata,
): CalendarIndicator {
  if (!metadata || !metadata.hasContent) return false;
  return metadata.hasUncompletedTodo ? 'primary' : 'secondary';
}
