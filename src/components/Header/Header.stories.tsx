import Header from './Header';
import { Meta, StoryFn } from '@storybook/react';
import { HeaderProps } from './Header';

import mock from './mock';

export default {
  title: 'Header',
  component: Header,
  args: mock,
} as Meta;

export const Template: StoryFn<HeaderProps> = (args) => (
  <div>
    <Header {...args} />
  </div>
);
