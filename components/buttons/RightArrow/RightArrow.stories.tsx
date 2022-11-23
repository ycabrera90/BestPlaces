import { ComponentMeta, ComponentStory } from "@storybook/react";
import RightArrow, { IRightArrow } from "./RightArrow";
import { mockRightArrowProps } from "./RightArrow.mocks";

export default {
  title: "buttons/RightArrow",
  component: RightArrow,
  argTypes: {},
} as ComponentMeta<typeof RightArrow>;

const Template: ComponentStory<typeof RightArrow> = (args) => (
  <RightArrow {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockRightArrowProps.base,
} as IRightArrow;

