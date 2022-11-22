import { ComponentMeta, ComponentStory } from "@storybook/react";
import ImagesSlide, { IImagesSlide } from "./ImagesSlide";
import { mockImagesSlideProps } from "./ImagesSlide.mocks";

export default {
  title: "others/ImagesSlide",
  component: ImagesSlide,
  argTypes: {},
} as ComponentMeta<typeof ImagesSlide>;

const Template: ComponentStory<typeof ImagesSlide> = (args) => (
  <ImagesSlide {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockImagesSlideProps.base,
} as IImagesSlide;

