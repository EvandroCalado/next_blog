import Tags, { TagsProps } from '.';
import { Meta, StoryFn } from '@storybook/react';

const data = [
  {
    name: 'Api',
  },
  {
    name: 'Web',
  },
  {
    name: 'Frontend',
  },
];

export default {
  title: 'Tags',
  component: Tags,
  args: {
    tags: data,
  },
} as Meta;

export const Template: StoryFn<TagsProps> = (args) => (
  <div>
    <Tags {...args} />
  </div>
);
