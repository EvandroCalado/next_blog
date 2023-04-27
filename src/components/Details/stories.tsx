import PostDetails, { PostDetailsProps } from '.';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'PostDetails',
  component: PostDetails,
  args: {
    date: '2023-04-25T12:45:35.146Z',
    author: 'Evandro Calado',
    categories: [
      {
        attributes: {
          name: 'Javascript',
        },
      },
      {
        attributes: {
          name: 'React',
        },
      },
    ],
  },
} as Meta;

export const Template: StoryFn<PostDetailsProps> = (args) => (
  <div>
    <PostDetails {...args} />
  </div>
);
