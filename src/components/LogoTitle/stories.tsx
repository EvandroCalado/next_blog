import LogoTitle, { LogoTitleProps } from './';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'LogoTitle',
  component: LogoTitle,
  args: {
    title: 'Evandro Calado',
    description: 'Blog para estudos',
  },
} as Meta;

export const Template: StoryFn<LogoTitleProps> = (args) => (
  <div>
    <LogoTitle {...args} />
  </div>
);
