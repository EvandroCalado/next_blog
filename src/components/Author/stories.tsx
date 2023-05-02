import Author, { AuthorProps } from './';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Author',
  component: Author,
} as Meta;

export const Template: StoryFn<AuthorProps> = (args) => (
  <div>
    <Author {...args} />
  </div>
);
