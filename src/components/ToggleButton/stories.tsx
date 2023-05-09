import ToggleButton from './';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'ToggleButton',
  component: ToggleButton,
} as Meta;

export const Template: StoryFn = (args) => (
  <div>
    <ToggleButton {...args} />
  </div>
);
