import Container, { ContainerProps } from './Container';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Container',
  component: Container,
  args: {
    children: 'Contaier',
  },
} as Meta;

export const Template: StoryFn<ContainerProps> = (args) => (
  <div>
    <Container {...args} />
  </div>
);
