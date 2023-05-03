import Logo, { LogoProps } from './';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Logo',
  component: Logo,
  args: {
    image: 'https://avatars.githubusercontent.com/u/110628201?v=4',
    title: 'Evandro Calado',
    description: 'uma descrição',
  },
} as Meta;

export const Template: StoryFn<LogoProps> = (args) => (
  <div>
    <Logo {...args} />
  </div>
);
