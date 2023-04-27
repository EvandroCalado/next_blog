import Cover, { CoverProps } from '.';
import { Meta, StoryFn } from '@storybook/react';

import mock from './mock';

export default {
  title: 'Cover',
  component: Cover,
  args: mock,
} as Meta;

export const Template: StoryFn<CoverProps> = (args) => (
  <div>
    <Cover {...args} />
  </div>
);
