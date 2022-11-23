import { ComponentMeta, ComponentStory } from "@storybook/react";
import LeftArrow, { ILeftArrow } from "./LeftArrow";
import { mockLeftArrowProps } from "./LeftArrow.mocks";

export default {
  title: "buttons/LeftArrow",
  component: LeftArrow,
  argTypes: {},
} as ComponentMeta<typeof LeftArrow>;

const Template: ComponentStory<typeof LeftArrow> = (args) => (
  <LeftArrow {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockLeftArrowProps.base,
} as ILeftArrow;

