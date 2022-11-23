import { ComponentMeta, ComponentStory } from "@storybook/react";
import ImagesSroll from "./ImagesSroll";

export default {
  title: "others/ImagesSroll",
  component: ImagesSroll,
  argTypes: {},
} as ComponentMeta<typeof ImagesSroll>;

const Template: ComponentStory<typeof ImagesSroll> = (args) => (
  <ImagesSroll {...args} />
);

export const Base = Template.bind({});
