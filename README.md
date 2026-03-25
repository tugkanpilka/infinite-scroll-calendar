# @docbook/calendar

React calendar component built on top of `@docbook/date-grid`.

## Install

```bash
npm install @docbook/calendar @docbook/date-grid
```

## Usage

```tsx
import { Calendar } from '@docbook/calendar';

<Calendar
  data={sections}
  defaultValue={{ kind: 'day', key: '2026-03-10' }}
  defaultExpanded={false}
/>;
```
