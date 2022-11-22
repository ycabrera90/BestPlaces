import { ComponentMeta, ComponentStory } from "@storybook/react";
import SmLogoIcon from "./SmLogoIcon";

export default {
  title: "icons/SmLogoIcon",
  component: SmLogoIcon,
  argTypes: {},
} as ComponentMeta<typeof SmLogoIcon>;

const Template: ComponentStory<typeof SmLogoIcon> = (args) => (
  <SmLogoIcon {...args} />
);

export const Base = Template.bind({});
