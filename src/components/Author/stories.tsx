import Author, { AuthorProps } from './';
import { Meta, StoryFn } from '@storybook/react';

import mock from './mock';

export default {
  title: 'Author',
  component: Author,
  args: mock,
} as Meta;

export const Template: StoryFn<AuthorProps> = (args) => (
  <div>
    <Author {...args} />
  </div>
);
