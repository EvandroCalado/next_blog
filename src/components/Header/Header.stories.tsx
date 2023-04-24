import Header from './Header';
import { Meta } from '@storybook/react';

export default {
  title: 'Header',
  component: Header,
} as Meta;

export const Template = (args: JSX.IntrinsicAttributes) => (
  <div>
    <Header {...args} />
  </div>
);
