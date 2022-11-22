import { ComponentMeta, ComponentStory } from "@storybook/react";
import MainNavBar, { IMainNavBar } from "./MainNavBar";
import { mockMainNavBarProps } from "./MainNavBar.mocks";

export default {
  title: "navigation/MainNavBar",
  component: MainNavBar,
  argTypes: {},
} as ComponentMeta<typeof MainNavBar>;

const Template: ComponentStory<typeof MainNavBar> = (args) => (
  <MainNavBar {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockMainNavBarProps.base,
} as IMainNavBar;

// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
