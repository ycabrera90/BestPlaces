import { ComponentMeta, ComponentStory } from '@storybook/react';
import MainHeader, { IMainHeader } from './MainHeader';
import { mockMainHeaderProps } from './MainHeader.mocks';

export default {
  title: 'headers/MainHeader',
  component: MainHeader,
  argTypes: {},
} as ComponentMeta<typeof MainHeader>;

const Template: ComponentStory<typeof MainHeader> = (args) => (
  <MainHeader {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockMainHeaderProps.base,
} as IMainHeader;



// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
