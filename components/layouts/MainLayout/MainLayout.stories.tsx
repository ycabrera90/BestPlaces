import { ComponentMeta, ComponentStory } from "@storybook/react";
import MainLayout from "./MainLayout";

export default {
  title: "layouts/MainLayout",
  component: MainLayout,
  argTypes: {},
} as ComponentMeta<typeof MainLayout>;

const Template: ComponentStory<typeof MainLayout> = (args) => (
  <MainLayout {...args} />
);

export const Base = Template.bind({});

