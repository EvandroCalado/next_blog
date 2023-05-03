import Search from './';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Search',
  component: Search,
} as Meta;

export const Template: StoryFn = (args) => (
  <div>
    <Search {...args} />
  </div>
);
