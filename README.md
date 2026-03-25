# infinite-scroll-calendar

React calendar component built on top of `date-grid`.

## Install

```bash
npm install infinite-scroll-calendar date-grid
```

## Usage

```tsx
import { Calendar } from 'infinite-scroll-calendar';

<Calendar
  data={sections}
  defaultValue={{ kind: 'day', key: '2026-03-10' }}
  defaultExpanded={false}
/>;
```
