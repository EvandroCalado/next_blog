import Comments, { CommentsProps } from '.';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Comments',
  component: Comments,
} as Meta;

export const Template: StoryFn<CommentsProps> = (args) => (
  <div>
    <Comments {...args} />
  </div>
);
