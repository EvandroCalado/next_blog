import Content, { ContentProps } from '.';
import { Meta, StoryFn } from '@storybook/react';

import mock from './mock';

export default {
  title: 'Content',
  component: Content,
  args: mock,
} as Meta;

export const Template: StoryFn<ContentProps> = (args) => (
  <div>
    <Content {...args} />
  </div>
);
