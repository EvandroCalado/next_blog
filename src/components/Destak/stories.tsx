import Destak, { DestakProps } from './';
import { Meta, StoryFn } from '@storybook/react';

import mock from './mock';

export default {
  title: 'Destak',
  component: Destak,
  args: mock,
} as Meta;

export const Template: StoryFn<DestakProps> = (args) => (
  <div>
    <Destak {...args} />
  </div>
);
