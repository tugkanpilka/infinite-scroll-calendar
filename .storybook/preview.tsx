import type { Preview } from '@storybook/react-vite';
import './dark-theme.css';

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
          data-theme={isDark ? 'dark' : 'light'}
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '400px',
            padding: '24px',
            background: isDark ? '#1c1c1c' : '#fdfcfb',
            minWidth: '260px',
            borderRadius: '12px',
          } as React.CSSProperties}
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
