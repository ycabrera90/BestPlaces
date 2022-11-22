import { ComponentMeta, ComponentStory } from "@storybook/react";
import ToggleButton, { IToggleButton } from "./ToggleButton";
import { mockToggleButtonProps } from "./ToggleButton.mocks";

export default {
  title: "buttons/ToggleButton",
  component: ToggleButton,
  argTypes: {},
} as ComponentMeta<typeof ToggleButton>;

const Template: ComponentStory<typeof ToggleButton> = (args) => (
  <ToggleButton {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockToggleButtonProps.base,
} as IToggleButton;

