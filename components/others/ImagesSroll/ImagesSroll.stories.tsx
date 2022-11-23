import { ComponentMeta, ComponentStory } from "@storybook/react";
import ImagesSroll, { IImagesSroll } from "./ImagesSroll";
import { mockImagesSrollProps } from "./ImagesSroll.mocks";

export default {
  title: "others/ImagesSroll",
  component: ImagesSroll,
  argTypes: {},
} as ComponentMeta<typeof ImagesSroll>;

const Template: ComponentStory<typeof ImagesSroll> = (args) => (
  <ImagesSroll {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockImagesSrollProps.base,
} as IImagesSroll;

