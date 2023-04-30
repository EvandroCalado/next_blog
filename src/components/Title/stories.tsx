import Title, { TitleProps } from './';
import { Meta, StoryFn } from '@storybook/react';

import mock from './mock';

export default {
  title: 'Title',
  component: Title,
  args: mock,
} as Meta;

export const Template: StoryFn<TitleProps> = (args) => (
  <div>
    <Title {...args} />
  </div>
);
