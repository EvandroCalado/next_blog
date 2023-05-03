import Excerpt, { ExcerptProps } from './';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Excerpt',
  component: Excerpt,
  args: {
    excerpt: (
      <p>
        Lorem markdownum urit, prohibete posuere annum suos fecimus, per
        Hectoris nunc, nec lascivaque lustra. Visus nemo, amores terrigenasque
        parens hunc facinus.
      </p>
    ),
  },
} as Meta;

export const Template: StoryFn<ExcerptProps> = (args) => (
  <div>
    <Excerpt {...args} />
  </div>
);
