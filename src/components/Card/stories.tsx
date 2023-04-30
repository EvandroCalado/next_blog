import Card, { CardProps } from '.';
import { Meta, StoryFn } from '@storybook/react';

import mock from './mock';

export default {
  title: 'Card',
  component: Card,
  args: mock,
} as Meta;

export const Template: StoryFn<CardProps> = (args) => (
  <div>
    <Card {...args} />
  </div>
);
