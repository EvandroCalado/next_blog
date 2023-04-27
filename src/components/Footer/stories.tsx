import Footer, { FooterProps } from '.';
import { Meta, StoryFn } from '@storybook/react';

import mock from './mock';

export default {
  title: 'Footer',
  component: Footer,
  args: mock,
} as Meta;

export const Template: StoryFn<FooterProps> = (args) => (
  <div>
    <Footer {...args} />
  </div>
);
