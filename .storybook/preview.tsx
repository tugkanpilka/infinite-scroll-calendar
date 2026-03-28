import type { Preview } from '@storybook/react-vite';

const DARK_VARS: React.CSSProperties = {
  '--isc-text-primary': '#c0c0c0',
  '--isc-text-secondary': '#a0a0a0',
  '--isc-today-bg': '#ef5350',
  '--isc-today-text': '#fff',
  '--isc-hover-bg': 'rgba(255,255,255,0.08)',
  '--isc-row-hover-bg': 'rgba(255,255,255,0.06)',
  '--isc-selected-month-bg': 'rgba(255,255,255,0.04)',
  '--isc-outside-opacity': '0.3',
  '--isc-week-color': '#707070',
  '--isc-week-color-hover': '#909090',
  '--isc-week-selected-bg': 'rgba(255,255,255,0.1)',
  '--isc-indicator-primary': '#5b9bff',
  '--isc-indicator-secondary': 'rgba(91,155,255,0.45)',
  '--isc-scroll-border-color': 'rgba(255,255,255,0.08)',
} as React.CSSProperties;

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Color theme',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
  decorators: [
    (Story, context) => {
      const isDark = context.globals['theme'] === 'dark';

      return (
        <div
          style={{
            ...(isDark ? DARK_VARS : {}),
            padding: '24px',
            background: isDark ? '#1c1c1c' : '#fdfcfb',
            minWidth: '260px',
            borderRadius: '12px',
          }}
        >
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: { test: 'todo' },
  },
};

export default preview;
