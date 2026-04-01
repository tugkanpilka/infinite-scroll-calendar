# infinite-scroll-calendar

A React calendar component for month, week, and day selection with expandable rows, sticky weekday headers, and lightweight customization hooks.

Built on top of [`date-grid`](https://www.npmjs.com/package/date-grid), `infinite-scroll-calendar` is designed for product UIs that need a navigable calendar surface without dragging in a full scheduling framework.

## Why This Package

- Supports day, week, and month selection in a single component
- Works with controlled and uncontrolled state
- Ships expandable/collapsible calendar rows
- Supports metadata-driven indicators for days, weeks, and months
- Exposes slot and formatter APIs for UI customization
- Keeps React as a peer dependency

## Installation

```bash
npm install infinite-scroll-calendar date-grid
```

Import the bundled stylesheet once in your app:

```tsx
import 'infinite-scroll-calendar/styles.css';
```

## Quick Start

```tsx
import {
  addWeekNumbers,
  buildRange,
  fillAdjacentDays,
  groupByMonth,
  splitRows,
} from 'date-grid';
import { Calendar } from 'infinite-scroll-calendar';
import 'infinite-scroll-calendar/styles.css';

const data = addWeekNumbers(
  splitRows(
    fillAdjacentDays(
      groupByMonth(
        buildRange({
          start: new Date('2026-01-01'),
          end: new Date('2026-12-31'),
        }),
      ),
    ),
  ),
);

export function Example() {
  return (
    <Calendar
      data={data}
      defaultValue={{ kind: 'day', key: '2026-03-10' }}
      defaultExpanded={false}
    />
  );
}
```

## Core Concepts

`Calendar` works with three selection kinds:

- Day: `YYYY-MM-DD`
- Week: `YYYY-W##`
- Month: `YYYY-MM`

The component receives pre-grouped calendar data through the `data` prop. The recommended way to build that structure is with `date-grid`, as shown above.

## Controlled and Uncontrolled Usage

Uncontrolled state:

```tsx
<Calendar
  data={data}
  defaultValue={{ kind: 'day', key: '2026-03-10' }}
  defaultExpanded
/>
```

Controlled state:

```tsx
const [value, setValue] = useState({ kind: 'day', key: '2026-03-10' });
const [expanded, setExpanded] = useState(true);

<Calendar
  data={data}
  value={value}
  onValueChange={setValue}
  expanded={expanded}
  onExpandedChange={setExpanded}
/>;
```

## Indicators and Metadata

Indicators are driven by the `metadata` prop. The map can target day, week, or month keys.

```tsx
<Calendar
  data={data}
  metadata={{
    '2026-03-10': { hasContent: true, hasUncompletedTodo: true },
    '2026-W11': { hasContent: true },
    '2026-03': { hasCompletedTodo: true },
  }}
/>
```

## Customization

The `customization` prop lets you adapt behavior and rendering without forking the component.

```tsx
<Calendar
  data={data}
  customization={{
    firstDayOfWeek: 0,
    weekdayLabels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    formatters: {
      toggleLabel: (expanded) => (expanded ? 'Collapse' : 'Expand'),
    },
    classNames: {
      root: 'myCalendar',
      day: 'myCalendarDay',
    },
  }}
/>
```

Available customization hooks include:

- `firstDayOfWeek`
- `weekdayLabels`
- `formatters`
- `classNames`
- `slots`

For lower-level rendering, the package also exports `CalendarPure` and the public TypeScript types.

## API Overview

Common props:

- `data`: calendar sections generated from `date-grid`
- `value` / `defaultValue`: selected calendar item
- `expanded` / `defaultExpanded`: controls collapsed vs expanded state
- `onValueChange`: selection change callback
- `onExpandedChange`: expansion change callback
- `selectionEnabled`: disables interactive selection when `false`
- `metadata`: indicator data keyed by day/week/month id
- `scrolled`: toggles the sticky header border state
- `customization`: visual and behavioral overrides
- `style`: inline styles for the root container

## Development

```bash
yarn install
yarn build
yarn test
yarn storybook
```

## Contributing

Contributions are welcome. Start with [CONTRIBUTING.md](./CONTRIBUTING.md) for local setup and pull request expectations.

## License

MIT. See [LICENSE](./LICENSE).
