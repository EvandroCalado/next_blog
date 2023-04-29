import Pagination, { PaginationProps } from './';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Pagination',
  component: Pagination,
} as Meta;

export const Template: StoryFn<PaginationProps> = (args) => (
  <div>
    <Pagination {...args} />
  </div>
);
