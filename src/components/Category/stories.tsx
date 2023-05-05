import Category, { CategoriesProps } from '.';
import { Meta, StoryFn } from '@storybook/react';

import mock from './mock';

export default {
  title: 'Category',
  component: Category,
  args: mock,
} as Meta;

export const Template: StoryFn<CategoriesProps> = (args) => (
  <div>
    <Category {...args} />
  </div>
);
