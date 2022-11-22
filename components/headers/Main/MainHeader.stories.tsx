import { ComponentMeta, ComponentStory } from '@storybook/react';
import MainHeader from './MainHeader';

export default {
  title: 'headers/MainHeader',
  component: MainHeader,
  argTypes: {},
} as ComponentMeta<typeof MainHeader>;

const Template: ComponentStory<typeof MainHeader> = (args) => (
  <MainHeader {...args} />
);

export const Base = Template.bind({});




