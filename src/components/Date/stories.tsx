import Date, { DateProps } from '.';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Date',
  component: Date,
  args: {
    date: '2023-04-25T12:45:35.146Z',
  },
} as Meta;

export const Template: StoryFn<DateProps> = (args) => (
  <div>
    <Date {...args} />
  </div>
);
