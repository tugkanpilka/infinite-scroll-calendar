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

## Styling & Spacing

Out of the box the calendar embeds **flush** with its container — there are no internal paddings on any side, and week/month selection backgrounds fit each cell exactly with no bleed. This keeps the component drop-in friendly for any layout. Consumers opt into breathing room by overriding CSS custom properties, either globally or via the `style` prop.

```tsx
<Calendar
  data={data}
  style={{
    '--isc-row-padding-x': '6px',
    '--isc-section-pad-bottom': '6px',
    '--isc-section-gap': '4px',
  } as React.CSSProperties}
/>
```

### Spacing tokens

All defaults are `0px` unless noted.

| Token | Purpose |
| --- | --- |
| `--isc-row-padding-x` | Horizontal padding on every grid row and the weekday header |
| `--isc-section-pad-top` / `--isc-section-pad-bottom` | Inner padding at the top / bottom of each month section |
| `--isc-section-gap` | Vertical gap between month sections |
| `--isc-section-radius` | Corner radius applied to month sections (default `12px`) |
| `--isc-month-label-offset` | Inline-start offset of the month title (defaults to `--isc-row-padding-x`) |
| `--isc-month-label-pad-y` / `--isc-month-label-pad-end` | Vertical / inline-end padding around the month title |
| `--isc-weekday-header-pad-bottom` | Bottom padding of the weekday header in expanded mode |
| `--isc-weekday-header-pad-bottom-collapsed` | Bottom padding of the weekday header in collapsed mode |
| `--isc-weekday-header-margin-bottom-collapsed` | Bottom margin of the weekday header in collapsed mode |
| `--isc-week-bleed-start` / `--isc-week-bleed-end` | How far the week-row hover/selection background extends past the cell on each side |
| `--isc-day-indicator-offset` | Vertical offset of the day indicator dot (default `-4px`, negative bleeds outside the cell) |
| `--isc-week-indicator-offset` | Vertical offset of the week indicator dot (default `-10px`) |
| `--isc-toggle-pad` / `--isc-toggle-pad-expanded` | Padding around the expand/collapse toggle button |
| `--isc-toggle-top` / `--isc-toggle-right` / `--isc-toggle-bottom` | Toggle button positioning when collapsed (top/right) and expanded (bottom) |

### Sizing tokens

| Token | Default | Purpose |
| --- | --- | --- |
| `--isc-cell-size` | `38px` | Width / height of every grid cell |
| `--isc-day-marker-size` | `23px` | Size of the day-marker pill |
| `--isc-week-col-width` | `minmax(0, 1fr)` | Track width for the week-number column. By default it matches a day column for symmetric backgrounds; set a fixed `px` value for a narrow legacy column |
| `--isc-day-radius` | `50%` | Border radius of the day marker |
| `--isc-row-gap` | `0` | Vertical gap between rows |

### Theming tokens

`--isc-text-primary`, `--isc-text-secondary`, `--isc-today-bg`, `--isc-today-text`, `--isc-hover-bg`, `--isc-row-hover-bg`, `--isc-selected-month-bg`, `--isc-week-color`, `--isc-week-color-hover`, `--isc-week-selected-bg`, `--isc-indicator-primary`, `--isc-indicator-secondary`, `--isc-scroll-border-color`, `--isc-outside-opacity`, `--isc-font-family`. Each token has a `prefers-color-scheme: dark` fallback baked in.

### Cushioned preset

To restore the previous "roomy" look as a starting point, copy these overrides:

```css
--isc-row-padding-x: 6px;
--isc-section-pad-top: 2px;
--isc-section-pad-bottom: 6px;
--isc-section-gap: 4px;
--isc-month-label-pad-y: 4px;
--isc-month-label-pad-end: 8px;
--isc-weekday-header-pad-bottom: 4px;
--isc-weekday-header-margin-bottom-collapsed: -2px;
--isc-week-bleed-start: 4px;
--isc-week-bleed-end: 11px;
```

The `Calendar/Layout` Storybook entries (`Defaults`, `CushionedPreset`, `RoomyContainer`, `NarrowWeekColumn`, `IndicatorsInsideCells`, `NarrowSidebar`, `SelectionTightFit`) demo each scenario.

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
