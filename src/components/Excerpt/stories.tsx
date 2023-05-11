import Excerpt, { ExcerptProps } from './';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Excerpt',
  component: Excerpt,
  args: {
    excerpt:
      'Lorem markdownum urit, prohibete posuere annum suos fecimus, per, Lorem markdownum urit, prohibete posuere annum suos fecimus, per',
  },
} as Meta;

export const Template: StoryFn<ExcerptProps> = (args) => (
  <div>
    <Excerpt {...args} />
  </div>
);
