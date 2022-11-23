import { ComponentMeta, ComponentStory } from "@storybook/react";
import ImageDetail, { IImageDetail } from "./ImageDetail";
import { mockImageDetailProps } from "./ImageDetail.mocks";

export default {
  title: "others/ImageDetail",
  component: ImageDetail,
  argTypes: {},
} as ComponentMeta<typeof ImageDetail>;

const Template: ComponentStory<typeof ImageDetail> = (args) => (
  <ImageDetail {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockImageDetailProps.base,
} as IImageDetail;

