import NotFound, { NotFoundProps } from './';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'NotFound',
  component: NotFound,
  args: {
    children: 'Não encotrado',
  },
} as Meta;

export const Template: StoryFn<NotFoundProps> = (args) => (
  <div>
    <NotFound {...args} />
  </div>
);
