import Header from '.';
import { Meta, StoryFn } from '@storybook/react';
import { HeaderProps } from '.';

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
