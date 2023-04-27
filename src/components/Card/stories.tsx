import PostCard, { PostCardProps } from '.';
import { Meta, StoryFn } from '@storybook/react';

import mock from './mock';

export default {
  title: 'PostCard',
  component: PostCard,
  args: mock,
} as Meta;

export const Template: StoryFn<PostCardProps> = (args) => (
  <div>
    <PostCard {...args} />
  </div>
);
