import Button, { ButtonProps } from './';
import { Meta, StoryFn } from '@storybook/react';

import { ChevronRight } from '@styled-icons/material-outlined';

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Button',
  },
} as Meta;

export const WithIcon: StoryFn<ButtonProps> = (args) => (
  <div>
    <Button {...args} icon={<ChevronRight />} />
  </div>
);

export const WithSecondaryColor: StoryFn<ButtonProps> = (args) => (
  <div>
    <Button {...args} icon={<ChevronRight />} color="secondary" />
  </div>
);

export const WithoutIcon: StoryFn<ButtonProps> = (args) => (
  <div>
    <Button {...args} />
  </div>
);

export const Disabled: StoryFn<ButtonProps> = (args) => (
  <div>
    <Button {...args} disasbled={true} />
  </div>
);
