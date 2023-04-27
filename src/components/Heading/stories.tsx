import Heading, { HeadingProps } from '.';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Heading',
  },
} as Meta;

export const Template: StoryFn<HeadingProps> = (args) => (
  <div>
    <Heading {...args} />
  </div>
);
