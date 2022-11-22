import { ComponentMeta, ComponentStory } from "@storybook/react";
import ImageMotion, { IImageMotion } from "./ImageMotion";
import { mockImageMotionProps } from "./ImageMotion.mocks";

export default {
  title: "backdrops/ImageMotion",
  component: ImageMotion,
  argTypes: {},
} as ComponentMeta<typeof ImageMotion>;

const Template: ComponentStory<typeof ImageMotion> = (args) => (
  <ImageMotion {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockImageMotionProps.base,
} as IImageMotion;

